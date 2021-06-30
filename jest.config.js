module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  modulePaths: ["<rootDir>"],
  coveragePathIgnorePatterns: [
    'setup-jest.ts',
    '.module.ts',
    '.model.ts',
    '.service.ts'
  ],
  testPathIgnorePatterns: ["node_modules/(?!(jest-test))"],
  testPathIgnorePatterns: ["<rootDir>/dist/","<rootDir>/node_modules"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/src/tsconfig.spec.json"
    }
  }
};
