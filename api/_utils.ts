import { VercelResponse } from '@vercel/node';

/**
 * Common CORS headers for all API endpoints
 */
export function setCorsHeaders(res: VercelResponse, methods: string[] = ['GET', 'POST', 'OPTIONS']) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', methods.join(', '));
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-whoop-signature, x-whoop-signature-timestamp');
}

/**
 * Standard error response format
 */
export interface ApiError {
  error: string;
  code?: string;
  details?: unknown;
  timestamp?: string;
}

/**
 * Create a standardized error response
 */
export function createErrorResponse(
  message: string,
  code?: string,
  details?: unknown
): ApiError {
  const response: ApiError = {
    error: message,
    timestamp: new Date().toISOString()
  };

  if (code) response.code = code;
  if (details) response.details = details;

  return response;
}

/**
 * Handle method validation with standardized response
 */
export function validateMethod(
  method: string | undefined,
  allowedMethods: string[]
): { isValid: boolean; error?: ApiError } {
  if (!method || !allowedMethods.includes(method)) {
    return {
      isValid: false,
      error: createErrorResponse(
        'Method not allowed',
        'METHOD_NOT_ALLOWED',
        { allowed_methods: allowedMethods }
      )
    };
  }
  return { isValid: true };
}

/**
 * Create timeout controller with cleanup
 */
export function createTimeoutController(timeoutMs: number) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const cleanup = () => clearTimeout(timeoutId);

  return { controller, cleanup };
}

/**
 * Enhanced error with status code
 */
export class ApiErrorWithStatus extends Error {
  status: number;
  data?: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiErrorWithStatus';
    this.status = status;
    this.data = data;
  }
}

/**
 * Type guard for errors with status
 */
export function isErrorWithStatus(error: unknown): error is ApiErrorWithStatus {
  return error instanceof Error && 'status' in error;
}

/**
 * Extract status and message from unknown error
 */
export function getErrorInfo(error: unknown): { status: number; message: string; data?: unknown } {
  if (isErrorWithStatus(error)) {
    return {
      status: error.status,
      message: error.message,
      data: error.data
    };
  }

  if (error instanceof Error) {
    return {
      status: 500,
      message: error.message
    };
  }

  return {
    status: 500,
    message: 'Unknown error occurred'
  };
}

/**
 * Environment variable validation helper
 */
export function validateEnvVars(required: string[]): { isValid: boolean; missing: string[] } {
  const missing = required.filter(key => !process.env[key]);
  return {
    isValid: missing.length === 0,
    missing
  };
}

/**
 * Logging helper with consistent format
 */
export const logger = {
  info: (message: string, context?: Record<string, unknown>) => {
    console.log(`ℹ️ ${message}`, context ? JSON.stringify(context) : '');
  },
  error: (message: string, error?: unknown, context?: Record<string, unknown>) => {
    console.error(`❌ ${message}`, error, context ? JSON.stringify(context) : '');
  },
  success: (message: string, context?: Record<string, unknown>) => {
    console.log(`✅ ${message}`, context ? JSON.stringify(context) : '');
  },
  warn: (message: string, context?: Record<string, unknown>) => {
    console.warn(`⚠️ ${message}`, context ? JSON.stringify(context) : '');
  }
}; 
