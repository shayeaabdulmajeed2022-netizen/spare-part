# Contributing to Spare Part

Thank you for considering contributing to the Spare Part E-Commerce Platform! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Report issues responsibly

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB
- Git
- Docker (optional)

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/spare-part.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
5. Set up environment variables from `.env.example`

### Running Locally

```bash
# Using Docker Compose
docker-compose up

# Or manually
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm start
```

## Commit Guidelines

- Use descriptive commit messages
- Format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Example: `feat(products): add product search functionality`

## Pull Request Process

1. Update README.md with any new features or changes
2. Ensure all tests pass: `npm test`
3. Update documentation as needed
4. Fill out the PR template completely
5. Request review from maintainers
6. Address feedback and iterate

## Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, Node version, etc.)

## Feature Requests

When proposing new features:
- Provide clear use case
- Explain expected behavior
- Consider impact on existing features
- Discuss implementation approach

## Code Style

- Follow existing code conventions
- Use TypeScript for type safety
- Format code with Prettier
- Use ESLint for JavaScript/TypeScript
- Write meaningful variable and function names

## Testing

- Write tests for new features
- Ensure existing tests still pass
- Aim for >80% code coverage
- Use Jest for testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## Documentation

- Update relevant documentation
- Include code examples where helpful
- Keep README.md current
- Document API endpoints
- Add inline comments for complex logic

## Need Help?

- Check existing issues and discussions
- Review project documentation
- Ask questions in pull requests
- Open a discussion for ideas

Thank you for contributing! 🚀
