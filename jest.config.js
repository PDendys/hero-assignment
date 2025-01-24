module.exports = {
  testEnvironment: 'jsdom', // For testing React components
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Optional setup file
  testPathIgnorePatterns: ['/node_modules/', '/build/'], // Ignore build folder
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy', // Mock CSS imports
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform JS files using Babel
    // '^.+\\.tsx?$': 'ts-jest', // Transform TS files
  },
  moduleFileExtensions: ['js', 'jsx'],
};
