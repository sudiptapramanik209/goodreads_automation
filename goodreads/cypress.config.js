const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber())
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
      // implement node event listeners here
      specPattern: 'cypress/UAT/features/*.{js,feature}'
  },
  //chromeWebSecurity:false
  defaultCommandTimeout: 10000
});
