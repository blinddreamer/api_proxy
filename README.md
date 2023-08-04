# Proxy Server for API Requests

![GitHub](https://img.shields.io/github/license/blinddreamer/api_proxy)
![GitHub last commit](https://img.shields.io/github/last-commit/blinddreamer/api_proxy)

This repository contains a simple proxy server built with Node.js and Express. It allows the frontend application to make API requests to external services securely by bypassing CORS restrictions.

## Getting Started

To use this proxy server in your project, follow the steps below:

### Prerequisites

- Node.js (https://nodejs.org/) installed on your machine.
- An API endpoint that you want to fetch data from.

### Installation

1. Clone the repository:

git clone https://github.com/blinddreamer/api_proxy
cd api_proxy


2. Install the dependencies:

npm install


### Configuration

- Update the `apiUrl` variable in `server.js` to point to your desired external API endpoint.

The proxy server is configured to allow cross-origin requests only from the domain 'https://huku.rocks'. This helps secure the API requests and prevents unauthorized access from other origins.

The CORS configuration is set in the proxy server code using the `cors` middleware in Express. By specifying `origin: 'https://huku.rocks'`, the proxy server will respond to requests originating from this domain.

If you want to allow requests from a different domain, you can modify the `origin` property in the `corsOptions` object in `server.js`.

Replace 'your-frontend-domain' with your actual frontend domain
const corsOptions = {
  origin: 'https://huku.rocks',
};

### Usage

1. Start the proxy server:


npm start


The proxy server will be available at `http://localhost:5000`.

2. In your frontend application, update the API calls to use the proxy server URL (e.g., `http://localhost:5000/api/monitors`). This will allow your frontend to access the external API securely without encountering CORS issues.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

## Acknowledgments

- This proxy server is built using [Express](https://expressjs.com/).
- The API requests are made using [node-fetch](https://www.npmjs.com/package/node-fetch).

## Contact

If you have any questions or feedback, feel free to reach out at blinddreamer@huku.rocks.

---
