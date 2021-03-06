var DefaultBuilder = require("truffle-default-builder");

module.exports = {
  build: new DefaultBuilder({
    "index.html": "truffle.html",
    "app.js": [
      "javascripts/app.js",
      "javascripts/q.js",
      "javascripts/moment.js",
      "javascripts/buffer.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ]
  }),
  networks: {
    development: {
      host: "localhost",
      port: 8545, // Default Metamask port | Default Ganache port: 7545
      network_id: "*" // Match any network id
    }
  }
};