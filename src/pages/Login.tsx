import { useState, useCallback } from 'react'
import { Form, Field } from 'react-final-form'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components'

const defaultAuth = {
  email: import.meta.env.VITE_AUTH_EMAIL || '',
  password: import.meta.env.VITE_AUTH_PASSWORD || ''
}

interface FormValues {
  email: string
  password: string
}

interface FieldError {
  email?: string
  password?: string
}

const validate = (values: FormValues): FieldError => {
  const errors: FieldError = {}
  
  if (!values.email) {
    errors.email = 'Email is required'
  } 
  
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  if (!values.password) {
    errors.password = 'Password is required'
  }
  
  return errors
}

export const Login = () => {
  const [error, setError] = useState<string | null>(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit = useCallback(
    async (values: FormValues) => {
      setError(null)

      try {
        const success = await login(values.email, values.password)

        if (success) {
          navigate('/')
        } else {
          setError('Invalid credentials')
        }
      } catch (err) {
        setError('Something went wrong. Please try again.')
        console.error('Login error:', err)
      }
    },
    [login, navigate]
  )

  return (
          <div className="min-h-screen bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-large p-8">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Logo onClick={() => {}} />
            </div>
            <p className="text-white/70 text-sm">
              Sign in to your account to continue your fitness journey
            </p>
          </div>

          {/* Login Form */}
          <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={defaultAuth}
            render={({ handleSubmit, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Email Field */}
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-white/50" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <input
                            {...input}
                            id="email"
                            type="email"
                            className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-hidden focus:ring-4 focus:ring-primary-500/30 focus:border-primary-400 transition-all duration-200 ${
                              meta.error && meta.touched ? 'border-red-400' : 'border-white/20'
                            }`}
                            placeholder="Enter your email"
                          />
                        </div>
                        {meta.error && meta.touched && (
                          <p className="mt-1 text-sm text-red-300">{meta.error}</p>
                        )}
                      </div>
                    )}
                  </Field>

                  {/* Password Field */}
                  <Field name="password">
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-white/50" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            {...input}
                            id="password"
                            type="password"
                            className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-hidden focus:ring-4 focus:ring-primary-500/30 focus:border-primary-400 transition-all duration-200 ${
                              meta.error && meta.touched ? 'border-red-400' : 'border-white/20'
                            }`}
                            placeholder="Enter your password"
                          />
                        </div>
                        {meta.error && meta.touched && (
                          <p className="mt-1 text-sm text-red-300">{meta.error}</p>
                        )}

                        {!meta.error && error && <p className="mt-1 text-sm text-red-300">{error}</p>}
                      </div>
                    )}
                  </Field>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-linear-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-6 rounded-xl shadow-medium hover:from-primary-600 hover:to-primary-700 hover:shadow-large hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-hidden focus:ring-4 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Sign In
                      <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  )
}
