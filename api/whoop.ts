import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const WHOOP_API_BASE = 'https://api.prod.whoop.com/developer/v1';

// Helper function to handle WHOOP API requests
async function handleWhoopRequest(endpoint: string, accessToken: string) {
  try {
    console.log(`Fetching WHOOP data from: ${WHOOP_API_BASE}${endpoint}`);

    const response = await axios.get(`${WHOOP_API_BASE}${endpoint}`, {
      params: { limit: 1 },
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    });

    console.log(`✅ Successfully fetched WHOOP data from ${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Error fetching WHOOP data from ${endpoint}:`, error);

    if (axios.isAxiosError(error)) {
      console.error('Response status:', error.response?.status);
      console.error('Response data:', error.response?.data);

      // Re-throw with status code for proper error handling
      const err = new Error(error.response?.data?.message || error.message);
      (err as any).status = error.response?.status || 500;
      throw err;
    }

    throw error;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { endpoint } = req.query;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid authorization header' });
  }

  const accessToken = authHeader.substring(7); // Remove 'Bearer ' prefix

  if (!endpoint || typeof endpoint !== 'string') {
    return res.status(400).json({ error: 'Missing endpoint parameter' });
  }

  // Define allowed endpoints
  const allowedEndpoints = [
    '/cycle',
    '/recovery',
    '/activity/sleep',
    '/activity/workout'
  ];

  if (!allowedEndpoints.includes(endpoint)) {
    return res.status(400).json({ error: 'Invalid endpoint' });
  }

  try {
    const data = await handleWhoopRequest(endpoint, accessToken);
    return res.status(200).json(data);
  } catch (error: any) {
    const status = error.status || 500;
    const message = error.message || 'Internal server error';
    return res.status(status).json({ error: message });
  }
} 
