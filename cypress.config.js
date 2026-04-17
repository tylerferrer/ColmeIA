const { defineConfig } = require('cypress')

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').default

module.exports = defineConfig({
  env: {
    stepDefinitions: 'cypress/e2e/step_definitions/**/*.{js,mjs,ts,tsx}',
  },
  e2e: {
    baseUrl: 'https://teste-colmeia-qa.colmeia-corp.com/',
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 720,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      return config
    },
  },
})
