const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Your other Cypress configuration options here

  // Define the "e2e" block within the configuration
  e2e: {
    // Register the 'task' event
    setupNodeEvents(on, config) {
      // Register the 'task' event
      on('task', {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });
    },
  },
});