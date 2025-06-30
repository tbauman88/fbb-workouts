import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { whoopOAuthHelper } from '../utils/whoopOAuth';
import { useUpsertWhoopIntegrationMutation } from '../generated/graphql';

export const WhoopCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [message, setMessage] = useState('Processing Whoop authorization...');
  const hasProcessedRef = useRef(false);
  const [upsertWhoopIntegration] = useUpsertWhoopIntegrationMutation();

  useEffect(() => {
    const handleCallback = async () => {
      // Prevent duplicate processing
      if (hasProcessedRef.current) {
        console.log('⚠️ Callback already processed, skipping duplicate request...');
        return;
      }

      hasProcessedRef.current = true;
      console.log('🔄 Starting Whoop OAuth callback processing...');
      try {
        const code = searchParams.get('code');
        const error = searchParams.get('error');
        const state = searchParams.get('state');

        if (error) {
          throw new Error(`OAuth error: ${error}`);
        }

        if (!code) {
          throw new Error('No authorization code received from Whoop');
        }

        if (state !== 'whoop_auth') {
          throw new Error('Invalid state parameter - possible CSRF attack');
        }

        console.log('🔄 Processing Whoop OAuth callback with code:', code.substring(0, 20) + '...');
        setMessage('Exchanging authorization code for tokens...');

        // Get tokens from WHOOP
        const tokens = await whoopOAuthHelper.exchangeTokensOnly(code);
        console.log('✅ Token exchange completed successfully');

        setMessage('Storing tokens in database...');

        // Store tokens using GraphQL mutation
        const expiresAt = Math.floor(Date.now() / 1000) + tokens.expires_in;

        await upsertWhoopIntegration({
          variables: {
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
            expiresAt: expiresAt
          }
        });

        console.log('✅ Tokens stored successfully in database');
        setStatus('success');
        setMessage('🎉 Whoop integration connected successfully! Your fitness data will now sync automatically.');

        // Redirect to settings after 3 seconds
        setTimeout(() => {
          navigate('/settings');
        }, 3000);

      } catch (error) {
        console.error('❌ Whoop OAuth callback failed:', error);
        setStatus('error');
        setMessage(error instanceof Error ? error.message : 'Unknown error occurred');
      }
    };

    handleCallback();

    // Cleanup function to reset processing flag if component unmounts
    return () => {
      console.log('🧹 Whoop callback component unmounting');
    };
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Whoop Integration
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {status === 'processing' && (
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            )}

            {status === 'success' && (
              <div className="text-green-600">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}

            {status === 'error' && (
              <div className="text-red-600">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}

            <p className="mt-4 text-sm text-gray-600">{message}</p>

            <div className="mt-6">
              <button
                onClick={() => navigate('/settings')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {status === 'success' ? 'Continue to Settings' : 'Return to Settings'}
              </button>
            </div>

            {status === 'success' && (
              <p className="mt-2 text-xs text-gray-500">
                Redirecting automatically in 3 seconds...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 
