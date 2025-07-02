import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const WHOOP_OAUTH_URL = 'https://api.prod.whoop.com/oauth/oauth2/token';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      grant_type,
      code,
      refresh_token,
      client_id,
      client_secret,
      redirect_uri,
      scope
    } = req.body;

    if (!grant_type || !client_id || !client_secret) {
      return res.status(400).json({
        error: 'Missing required parameters: grant_type, client_id, client_secret'
      });
    }

    // Validate grant_type specific requirements
    if (grant_type === 'authorization_code' && (!code || !redirect_uri)) {
      return res.status(400).json({
        error: 'Missing required parameters for authorization_code: code, redirect_uri'
      });
    }

    if (grant_type === 'refresh_token' && !refresh_token) {
      return res.status(400).json({
        error: 'Missing required parameter for refresh_token: refresh_token'
      });
    }

    console.log(`Processing WHOOP OAuth request with grant_type: ${grant_type}`);

    // Create URLSearchParams for proper form encoding
    const params = new URLSearchParams();
    params.append('grant_type', grant_type);
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);

    if (grant_type === 'authorization_code') {
      params.append('code', code);
      params.append('redirect_uri', redirect_uri);
      if (scope) params.append('scope', scope);
    } else if (grant_type === 'refresh_token') {
      params.append('refresh_token', refresh_token);
      if (scope) params.append('scope', scope);
    }

    const response = await axios.post(WHOOP_OAUTH_URL, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
    });

    console.log('✅ WHOOP OAuth request successful');
    return res.status(200).json(response.data);

  } catch (error) {
    console.error('❌ WHOOP OAuth error:', error);

    if (axios.isAxiosError(error)) {
      console.error('Response status:', error.response?.status);
      console.error('Response data:', error.response?.data);

      return res.status(error.response?.status || 500).json({
        error: error.response?.data || 'OAuth request failed'
      });
    }

    return res.status(500).json({ error: 'Internal server error' });
  }
} 
