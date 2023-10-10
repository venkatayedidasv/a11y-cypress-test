const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

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
          // Determine the path to the log.json file
          const logFilePath = path.join(__dirname, 'result.json');
          fs.appendFile(logFilePath, JSON.stringify(message, null, 2) + '\n', (err) => {
          if (err) {
             console.error('Error writing to result.json:', err);
          }
          });
          return null;
        },
      });
    },
  },
});

