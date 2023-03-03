module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  //   collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/*/**/*.d.ts'],
  //   collectCoverage: false,
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@root(.*)$': '<rootDir>/src/$1',
    '^@/component(.*)$': '<rootDir>/src/component/$1',
    '^@/constant(.*)$': '<rootDir>/src/constant/$1',
    '^@/lib(.*)$': '<rootDir>/src/lib/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
    '^@/store(.*)$': '<rootDir>/src/store/$1',
    '^@/styles(.*)$': '<rootDir>/src/styles/$1',
  },
};
