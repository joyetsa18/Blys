const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports",
      "quite": true,
      "overwrite": true,
      "html": true,
      "json": true
  }
  },
  e2e: {
    baseUrl: 'https://app-staging.getblys.com.au',
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  
  
});
