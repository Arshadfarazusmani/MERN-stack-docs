# API Error Utility

This utility defines a custom error class for handling API errors in a structured way. It extends the built-in `Error` class and adds extra properties to provide more information about the error.

## Code

```js
class api_error extends Error {
  constructor(
    statuscode,
    message = "An error occurred while processing your request",
    error = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;      // HTTP status code (e.g., 404, 500)
    this.message = message;            // Error message
    this.data = null;                  // Optional data (default: null)
    this.success = false;              // Indicates failure
    this.error = error;                // Additional error details

    if (stack) {
      this.stack = stack;              // Custom stack trace if provided
    } else {
      Error.captureStackTrace(this, this.constructor); // Default stack trace
    }
  }
}

export { api_error };
```

## Explanation

- **Extends Error:** `api_error` inherits from the built-in `Error` class, so it behaves like a standard error but with extra properties.
- **statuscode:** Stores the HTTP status code for the error (e.g., 400, 404, 500).
- **message:** A human-readable error message.
- **data:** Placeholder for any additional data (default is `null`).
- **success:** Always set to `false` to indicate an error.
- **error:** Can hold additional error details (like an array of validation errors).
- **stack:** Stores the stack trace for debugging. If not provided, it uses the default stack trace.

This class helps standardize error handling in your API, making it easier to send consistent error responses to clients.