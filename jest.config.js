module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  moduleDirectories: ['node_modules', 'src', 'src/components'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/mocks/file.mock.js',
    '\\.(css|scss)$': '<rootDir>/src/test/mocks/style.mock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(test).{js,jsx,ts,tsx}'
  ],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.((js|ts)x?)?$': 'babel-jest'
  },
  verbose: true
};
