const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; // Choose any available port

// CORS configuration: Replace 'your-frontend-domain' with your actual frontend domain
const corsOptions = {
  origin: 'http://saitooooooooo',
};

app.use(cors(corsOptions));

// Define a route to handle the proxy request
app.get('/api/monitors', async (req, res) => {
  try {
    // Use dynamic import() instead of require() for node-fetch
    const fetch = await import('node-fetch');

    const apiUrl = "https://api.hetrixtools.com/v1/e1546211de0f332ec510d8a85c9461e2/uptime/monitors/0/30/";
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
