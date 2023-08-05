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

```
git clone https://github.com/blinddreamer/api_proxy
cd api_proxy
```

2. Install the dependencies:

```
npm install
```

### Configuration

The proxy server is already set up to use environment variables for `PORT`, `FRONTEND_DOMAIN`, and `API_URL`. 

### Usage

1. Start the proxy server:

```
docker build -t proxy-server .
docker run -p 5000:5000 -e FRONTEND_DOMAIN=https://your-frontend-domain.com -e API_URL=https://your-api-url.com proxy-server
```

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
