const {createClient} = require("redis");

const client = createClient({url: "http://localhost:6379"});


client.on("error", function (err) {
    console.error({ message: err.message });
  });
  
  module.exports = client;