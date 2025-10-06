const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        // baseUrl: 'https://ebac-agenda-contatos-tan.vercel.app/',
        baseUrl: 'https://ebac-agenda-contatos.vercel.app/',
        viewportWidth: 1280,
        viewportHeight: 720,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});