module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  coverageDirectory: 'coverage/distribution-manager',
  moduleNameMapper: {
    '@fepweb/core/models': '<rootDir>/src/app/core/models',
    '@fepweb/core/enums': '<rootDir>/src/app/core/enums',
    '@fepweb/core/resources': '<rootDir>/src/app/core/resources',
    '@fepweb/core/services': '<rootDir>/src/app/core/services',
    '@fepweb/core/auth': '<rootDir>/src/app/core/auth',
    '@fepweb/core/features': '<rootDir>/src/app/core/auth',
    '@fepweb/facades': '<rootDir>/src/app/facades',
    '@fepweb/shared': '<rootDir>/src/app/shared',
    '@environment': '<rootDir>/src/environments/environment.ts',
  },
};
