// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom', // or 'node' if you are running tests in a Node.js environment
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Any setup files for your tests
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  // Add more configuration options as needed
};
