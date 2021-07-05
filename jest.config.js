module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
  modulePathIgnorePatterns: ['dist/'],
  setupFiles: ['<rootDir>/src/sequelize.ts'],
  testMatch: ['src/**/?(*.)+(spec|test).[jt]s?(x)'],
}
