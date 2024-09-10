# express-dev-proxy

`express-dev-proxy` is a simple development server that uses Express and HTTP Proxy Middleware to forward API and frontend requests to configurable backend servers. This tool is designed to simplify local development by allowing you to proxy requests between different services and ports.

## Features

- **API Proxying**: Forward API requests to a configurable backend server.
- **Frontend Proxying**: Forward frontend requests to a configurable frontend server.
- **Automatic Browser Opening**: Opens the server URL in your default web browser upon startup.
- **Customizable Configuration**: Easily configure server settings using environment variables.

## Installation

1. **Clone the repository:**

   `git clone https://github.com/yourusername/express-dev-proxy.git`

2. **Navigate to the project directory:**

   `cd express-dev-proxy`

3. **Install dependencies:**

   `npm install`

## Configuration

The server configuration can be customized using environment variables. Create a `.env` file in the root directory of your project with the following optional variables:

- `PORT` - The port on which the server will listen. Default is `8000`.
- `API_TARGET` - The target URL for API requests. Default is `http://localhost:5000/`.
- `FRONTEND_TARGET` - The target URL for frontend requests. Default is `http://localhost:3000`.

Example `.env` file:
```
PORT=9000 API_TARGET=http://localhost:6000/ FRONTEND_TARGET=http://localhost:4000
```

## Usage

1. **Run the server:**

   `npm start`

   The server will start and listen on the specified port. It will automatically open the server URL in your default web browser.

2. **Ensure target servers are running**: Make sure that the API and frontend servers are up and accessible at the specified URLs.

## Dependencies

- `express` - Web framework for Node.js.
- `http-proxy-middleware` - Middleware for proxying HTTP requests.
- `open` - Module to open URLs in the default web browser.
- `dotenv` - Module to load environment variables from a `.env` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## Contact

For any questions or comments, you can reach me at [stewebb.2024@gmail.com](stewebb.2024@gmail.com).