# Express Toolkit

A modular toolkit for building Express.js applications with robust error handling, logging, and utility functions.

## Features
- Centralized error handling middleware
- Custom API error and response classes
- Async handler utility
- Logger utility
- Organized project structure

## Project Structure
```
├── package.json
├── logs/
├── src/
│   ├── index.js
│   ├── middlewares/
│   │   └── error.middleware.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── logger.js
├── tests/
│   └── nexus.test.js
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd express-toolkit
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Start the application:
```bash
npm start
```

## Testing
Run tests with:
```bash
npm test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
