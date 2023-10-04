const { defineConfig } = require("cypress");
const fs = require('fs');

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
          fs.appendFile('./cypress/reports/log.json', JSON.stringify(message, null, 2) + '\n', (err) => {
                      if (err) {
                        console.error('Error writing to log.json:', err);
                      }
                      });
          return null;
        },
      });
    },
  },
});

