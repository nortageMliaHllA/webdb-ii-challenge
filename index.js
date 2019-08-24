const server = require('./api/server.js');


const port =process.env.PORT || 6000;
server.listen(port, () => {
  console.log(`\n*** Web API Listening on http://localhost:${port} ***\n`);
});