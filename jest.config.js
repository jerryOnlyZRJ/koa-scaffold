module.exports = {
  testURL: 'http://localhost',
  testMatch: ['<rootDir>/tests/*.spec.js'],
  coverageDirectory: '<rootDir>/logs/coverage',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
