# Silent Crash on Port Binding in Node.js Express Server

This repository demonstrates a common, yet subtle, error in Node.js Express servers: silent crashes due to port binding issues. The provided code showcases the problem and its solution.

## Problem

The original `bug.js` file contains a simple Express server. However, if the specified port (3000 in this case) is already in use, the server will crash without providing any informative error message.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle port binding errors. It uses the `'error'` event listener to catch any issues and log an appropriate error message, preventing the server from crashing silently.

This improved error handling greatly aids in debugging and maintaining a more robust server.