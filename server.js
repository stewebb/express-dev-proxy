/**
 * A simple development server script using Express and HTTP Proxy Middleware.
 * 
 * This script sets up a development server that proxies API requests and frontend
 * requests to different targets. It uses environment variables to configure the
 * server settings, allowing for easy customization without modifying the code.
 * 
 * Features:
 * - Proxies API requests to a configurable backend server.
 * - Proxies frontend requests to a configurable frontend server.
 * - Opens the server URL in the default web browser upon startup.
 * 
 * Configuration:
 * The server configuration can be customized using environment variables. 
 * Create a `.env` file in the root directory of your project with the following optional variables:
 * 
 * - `PORT` - The port on which the server will listen. Default is 8000.
 * - `API_TARGET` - The target URL for API requests. Default is `http://localhost:5000/`.
 * - `FRONTEND_TARGET` - The target URL for frontend requests. Default is `http://localhost:3000`.
 * 
 * Example `.env` file:
 * 
 * PORT=9000
 * API_TARGET=http://localhost:6000/
 * FRONTEND_TARGET=http://localhost:4000
 * 
 * Dependencies:
 * - `express` - Web framework for Node.js.
 * - `http-proxy-middleware` - Middleware for proxying HTTP requests.
 * - `open` - Module to open URLs in the default web browser.
 * - `dotenv` - Module to load environment variables from a `.env` file.
 * 
 * Usage:
 * 1. Install the required dependencies:
 *    ```
 *    npm install express http-proxy-middleware open dotenv
 *    ```
 * 2. Run the server:
 *    ```
 *    node server.js
 *    ```
 * 
 * The server will start and listen on the specified port, and it will automatically
 * open the server URL in the default web browser.
 * 
 * Note: Ensure that the target servers (API and frontend) are running and accessible
 * at the specified URLs.
 */

import open from 'open';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

// Load environment variables from a .env file if available
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Default configuration values
const DEFAULT_PORT = 8000;
const DEFAULT_API_TARGET = 'http://localhost:5000/';
const DEFAULT_FRONTEND_TARGET = 'http://localhost:3000';

// Retrieve configuration from environment variables or use defaults
const port = process.env.PORT || DEFAULT_PORT;
const apiTarget = process.env.API_TARGET || DEFAULT_API_TARGET;
const frontendTarget = process.env.FRONTEND_TARGET || DEFAULT_FRONTEND_TARGET;

// Proxy requests from the API backend to the specified target
app.use('/api', createProxyMiddleware({
    target: apiTarget,
    changeOrigin: true,
}));

// Proxy requests from the frontend to the specified target
app.use('/', createProxyMiddleware({
    target: frontendTarget,
    changeOrigin: true,
}));

app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});

open(`http://localhost:${port}`)
    .then(() => {
        console.log('URL opened in default browser');
    })
    .catch(err => {
        console.error('Error opening URL:', err);
    });