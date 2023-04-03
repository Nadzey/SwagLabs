const { defineConfig } = require("cypress");

module.exports = defineConfig({

    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    
    e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
