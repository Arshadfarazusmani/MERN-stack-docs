# API Response Utility

This utility defines a custom response class for sending structured and consistent API responses. It helps standardize the format of successful responses sent from your server.

## Code

```js
class api_response {
    constructor(statuscode, message = "success", data) {
        this.statuscode = statuscode;                  // HTTP status code (e.g., 200, 201)
        this.message = message;                        // Response message
        this.data = data;                              // Payload data
        this.success = statuscode >= 200 && statuscode < 400; // Indicates success based on status code
    }
}

export { api_response };
```

## Explanation

- **statuscode:** The HTTP status code for the response (e.g., 200 for OK, 201 for Created).
- **message:** A human-readable message describing the response (default is "success").
- **data:** The actual data or payload to send back to the client.
- **success:** A boolean indicating if the response is successful (`true` for status codes 200–399).

This class helps you send API responses in a consistent format, making it easier for clients to handle and understand the