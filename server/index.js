const server = require('./app');

// write your code here
const port = process.env.PORT || 3000;
server.listen(port,() => console.log(`Listening on port ${port}...`));

