# Bauman Lift

## Description

Bauman Lift is a comprehensive fitness tracking application that allows users to choose from different workout programs and track their progression throughout their training cycles. 

Seamless  WHOOP integration for advanced biometric tracking, providing users with recovery, sleep, strain data, and workout analytics to optimize their fitness goals.

## Key Features

- **Workout Programs**: Choose from various fitness programs with structured progression
- **Progress Tracking**: Monitor your training cycle completion and performance metrics
- **WHOOP Integration**: Sync recovery, sleep, strain, and workout data from your WHOOP device
- **Real-time Analytics**: View comprehensive fitness metrics and performance insights
- **Exercise Library**: Comprehensive database with exercise demonstrations and instructions

## Technology Stack

This app is built using the following:

<div style="display: flex; align-items: center; gap: 10px;">
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6431B1?style=flat&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white" alt="GraphQL" />
    <img src="https://img.shields.io/badge/Apollo_Client-311C87?style=flat&logo=apollo-graphql&logoColor=white" alt="Apollo Client" />
    <img src="https://img.shields.io/badge/Hasura-1C1C1C?style=flat&logo=hasura&logoColor=white" alt="Hasura" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white" alt="Jest" />
</div>

### Architecture

- **Frontend**: React 19 with TypeScript, Vite for bundling
- **Backend**: Serverless API functions on Vercel with Hasura GraphQL
- **Database**: PostgreSQL with Hasura GraphQL Engine
- **Authentication**: Custom authentication with role-based access control
- **Testing**: Jest with React Testing Library
- **CI/CD**: GitHub Actions for automated testing and deployment

## Prerequisites

Before running this application, ensure you have:

- **Node.js** (version 20 or higher)
- **npm** (comes with Node.js)
- **WHOOP Developer Account** (for WHOOP integration)
- **Hasura Cloud Account** (for GraphQL backend)

### WHOOP Integration Setup

1. Register for a WHOOP Developer account at [WHOOP Developer Portal](https://developer.whoop.com/)
2. Create a new application and obtain your client ID and secret
3. Configure your redirect URIs:
   - Development: `http://localhost:3007/auth/whoop/callback`
   - Production: `https://your-domain.com/auth/whoop/callback`

## Getting Started

### Installation

**Install dependencies**
   ```bash
   npm ci
   ```

**Set up your environment variables**
   ```bash
   cp .env.example .env.local
   ```

**Generate GraphQL types**
   ```bash
   npm run codegen
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:3007` with hot module replacement enabled.

### API Development

The project includes serverless API functions for WHOOP integration:

- `/api/whoop` - WHOOP data proxy with OAuth token handling
- `/api/whoop-oauth` - OAuth token exchange and refresh
- `/api/webhook` - WHOOP webhook handler for real-time updates

## Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build locally

# Building
npm run build        # Create production build
npm run codegen      # Generate GraphQL types

# Testing
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report

# Linting
npm run lint         # Lint frontend code
npm run lint:api     # Lint API code
```

### Project Structure

```
bauman-lift/
├── api/                     # Serverless API functions
│   ├── handlers/           # API route handlers
│   └── __tests__/          # API tests
├── src/
│   ├── components/         # React components
│   │   └── Whoop/         # WHOOP-specific components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Route components
│   ├── graphql/           # GraphQL queries/mutations
│   ├── generated/         # Generated GraphQL types
│   ├── contexts/          # React contexts (WHOOP, Auth)
│   ├── services/          # API service functions
│   └── utils/             # Utility functions
├── public/                # Static assets
└── docs/                  # Documentation
```

### Testing

The project uses Jest with React Testing Library for comprehensive testing:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode during development
npm run test:watch
```

Test files are located in `__tests__` directories and follow the naming convention `*.test.ts` or `*.test.tsx`.

## Deployment

### Vercel Deployment

The application is configured for deployment on Vercel with automatic deployments from the main branch.

### Build Configuration

The project includes optimized build settings:
- Code splitting for vendor libraries
- Asset optimization
- TypeScript compilation
- Tailwind CSS processing

## API Documentation

### WHOOP Integration Endpoints

- **GET /api/whoop?endpoint=/cycle** - Get current cycle data
- **GET /api/whoop?endpoint=/recovery** - Get recovery metrics
- **GET /api/whoop?endpoint=/activity/sleep** - Get sleep data
- **GET /api/whoop?endpoint=/activity/workout** - Get workout activities
- **POST /api/whoop-oauth** - Exchange authorization code for tokens
- **POST /api/webhook** - Handle WHOOP webhooks

All API endpoints include proper CORS handling, rate limiting, and error responses.

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Use conventional commit messages
- Update documentation as needed
- Ensure all CI checks pass

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Check the [documentation](docs/) for detailed guides
- Review the [WHOOP Developer Documentation](https://developer.whoop.com/) for integration help
