const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//Problem: The server might crash without emitting an error event if there's a problem with the port.
//Solution: Use the 'error' event listener to handle potential port binding issues gracefully.