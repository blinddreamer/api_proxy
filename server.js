const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Use the PORT environment variable if provided, otherwise use 5000

// CORS configuration using environment variable for frontend domain
const corsOptions = {
  origin: process.env.FRONTEND_DOMAIN, // Use the FRONTEND_DOMAIN environment variable
};

app.use(cors(corsOptions));

// Define a route to handle the proxy request
app.get('/api/monitors', async (req, res) => {
  try {
    // Use dynamic import() instead of require() for node-fetch
    const fetch = await import('node-fetch');

    // Use environment variable for the API URL
    const apiUrl = process.env.API_URL;

    const response = await fetch.default(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});