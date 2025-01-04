const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 3000 is already in use. Please choose a different port.');
    process.exit(1);
  } else {
    console.error('An error occurred:', err);
    process.exit(1);
  }
});