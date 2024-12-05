module.exports = {
    projects: ['<rootDir>/packages/*/jest.config.js'],
    testEnvironment: 'node',
    collectCoverageFrom: [
        '<rootDir>/packages/*/src/**/*.ts',
        '!<rootDir>/packages/*/src/**/*.d.ts'
    ],
    moduleFileExtensions: ['ts', 'js'],
    testTimeout: 60_000
};
