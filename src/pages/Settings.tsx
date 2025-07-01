import { useAuth } from '../hooks/useAuth'
import { useGetIntegrationsQuery, useGetWhoopDataQuery } from '../generated/graphql'
import { config } from '../../environment'

// Dynamic redirect URI based on environment
const REDIRECT_URI = config.isDevelopment
  ? 'http://localhost:3007/auth/whoop/callback'
  : 'https://bauman-lift.vercel.app/auth/whoop/callback'

const SCOPES = 'read:recovery read:cycles read:sleep read:workout read:profile read:body_measurement offline'
const RESPONSE_TYPE = 'code'
const STATE = 'whoop_auth'
const CLIENT_ID = config.clientId

const WHOOP_AUTH_URL = `https://api.prod.whoop.com/oauth/oauth2/auth?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}&state=${STATE}`

export const Settings = () => {
  const { user } = useAuth()

  const { data } = useGetWhoopDataQuery({
    variables: { userId: String(user?.id) }
  })

  const INTEGRATION_ID = data?.integrations?.[0]?.id

  const { data: integrationData, refetch } = useGetIntegrationsQuery({
    skip: !INTEGRATION_ID,
    variables: { id: INTEGRATION_ID },
    errorPolicy: 'all'
  })

  const handleWhoopConnect = () => {
    window.open(WHOOP_AUTH_URL, '_window')
  }

  const handleWhoopDisconnect = async () => {
    // In a real app, you'd want to call a mutation to remove the integration
    console.log('Disconnect Whoop integration')
  }

  const isWhoopConnected = !!integrationData?.integration?.access_token

  const formatDate = (timestamp: number | string | undefined): string => {
    if (!timestamp) return 'Unknown'
    const date = typeof timestamp === 'string' ? new Date(timestamp) : new Date(timestamp * 1000)
    return date.toLocaleString()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-10 divide-gray-900/10">
        {/* Profile Section */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Your account information.
            </p>
          </div>

          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        value={user?.email || ''}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations Section */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Integrations</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Connect your fitness devices and apps to sync your data.
            </p>
          </div>

          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="space-y-6">
                {/* Whoop Integration */}
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">W</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">WHOOP</h3>
                      <p className="text-sm text-gray-500">
                        {isWhoopConnected
                          ? `Connected • Last updated: ${formatDate(integrationData?.integration?.updated_at)}`
                          : 'Connect your WHOOP device to sync recovery, sleep, and strain data'
                        }
                      </p>
                      {!isWhoopConnected && (
                        <p className="text-xs text-blue-600 mt-1">
                          💡 Make sure your WHOOP app redirect URL is set to: {REDIRECT_URI}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    {isWhoopConnected ? (
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={() => refetch()}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Refresh
                        </button>
                        <button
                          type="button"
                          onClick={handleWhoopConnect}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Reconnect
                        </button>
                        <button
                          type="button"
                          onClick={handleWhoopDisconnect}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Disconnect
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={handleWhoopConnect}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Connect WHOOP
                      </button>
                    )}
                  </div>
                </div>

                {/* Debug Information */}
                {process.env.NODE_ENV === 'development' && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm text-gray-500">Debug Info</summary>
                    <div className="mt-2 p-3 bg-gray-50 rounded text-xs font-mono">
                      <div><strong>Integration ID:</strong> {INTEGRATION_ID}</div>
                      <div><strong>Client ID:</strong> {config.clientId}</div>
                      <div><strong>Has Access Token:</strong> {isWhoopConnected ? '✅' : '❌'}</div>
                      <div><strong>OAuth URL:</strong> {WHOOP_AUTH_URL}</div>
                      {integrationData?.integration && (
                        <>
                          <div><strong>Token Expires:</strong> {formatDate(integrationData.integration.expires_at)}</div>
                          <div><strong>Updated At:</strong> {formatDate(integrationData.integration.updated_at)}</div>
                          <div><strong>Access Token (last 10):</strong> ...{integrationData.integration.access_token?.slice(-10)}</div>
                        </>
                      )}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
