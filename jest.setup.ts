import '@testing-library/jest-dom';

process.env.WHOOP_CLIENT_SECRET = 'test-secret-key-for-webhook-signing';
process.env.HASURA_WEBHOOK_URL = 'https://test-hasura.com/webhook';
process.env.HASURA_ADMIN_SECRET = 'test-hasura-admin-secret';
process.env.WHOOP_CLIENT_ID = 'test-client-id';

global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

expect.extend({
  toHaveBeenCalledWithError(received: jest.Mock, errorPattern: string | RegExp) {
    const calls = received.mock.calls;
    const hasMatchingCall = calls.some(call => {
      const firstArg = call[0];
      if (typeof errorPattern === 'string') {
        return firstArg?.includes(errorPattern);
      }
      return errorPattern.test(firstArg);
    });

    return {
      pass: hasMatchingCall,
      message: () =>
        hasMatchingCall
          ? `Expected not to be called with error matching ${errorPattern}`
          : `Expected to be called with error matching ${errorPattern}`,
    };
  },
}); 
