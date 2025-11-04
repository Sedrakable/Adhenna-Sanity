import sanityConfig from '@sanity/eslint-config-studio'

export default [
  ...sanityConfig,
  {
    files: ['scripts/**/*.js'],
    languageOptions: {globals: {console: 'readonly', process: 'readonly', setTimeout: 'readonly'}},
  },
]
