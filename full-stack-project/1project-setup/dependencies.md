# frontend 

Here are the dependencies and their common uses:

slick-carousel: A carousel/slider component.

react-slick: React component wrapper for slick-carousel.

react-toastify: For displaying toast notifications (small, non-blocking messages).

react-router: Core routing library for React.

react-router-dom: DOM bindings for React Router (what you use for web apps).

react-redux: Official React bindings for Redux, used for state management.

react-icons: A library that provides a huge collection of popular icon sets as React components.

apexcharts: A modern open-source charting library.

react-apexcharts: React component for ApexCharts.

moment: A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

flowbite: A set of open-source UI components built on top of Tailwind CSS.

axios: A promise-based HTTP client for making API requests to your backend.

@reduxjs/toolkit: The official, opinionated, batteries-included toolset for efficient Redux development. Simplifies Redux setup.

@paypal/react-paypal-js: Official React component for integrating PayPal payments.

# backend 
Here are the dependencies and their common uses:

nodemon: A utility that monitors for any changes in your source and automatically restarts your server (development dependency).

multer: Middleware for handling multipart/form-data, primarily used for uploading files.

mongoose: An elegant MongoDB object modeling tool, used for interacting with your MongoDB database.

jsonwebtoken: For implementing JSON Web Tokens (JWTs) for user authentication and authorization.

express: The fast, unopinionated, minimalist web framework for Node.js.

express-formidable: Middleware to parse incoming request data, including file uploads (alternative/complement to multer depending on use case).

express-async-handler: A simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

express-dotenv: (Likely a typo or less common package, usually just dotenv). dotenv is for loading environment variables from a .env file. If express-dotenv exists, it might be a wrapper. Assuming dotenv functionality here.

cors: Middleware to enable Cross-Origin Resource Sharing (CORS), allowing your frontend to make requests to your backend.

cookie-parser: Middleware to parse Cookie headers and populate req.cookies with an object keyed by cookie names. Useful for handling session cookies or JWTs in cookies.

concurrently: Allows you to run multiple commands concurrently (e.g., running both frontend and backend development servers with one command). Often installed in the project root, not necessarily just the backend.

bcryptjs: A library to hash passwords securely.