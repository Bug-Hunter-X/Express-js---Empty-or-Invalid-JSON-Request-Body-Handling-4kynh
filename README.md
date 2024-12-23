# Express.js - Empty or Invalid JSON Request Body Handling
This repository demonstrates a common issue in Express.js applications where handling empty or invalid JSON request bodies leads to unexpected behavior. The server doesn't provide helpful error messages, making debugging difficult. The solution provides robust error handling and feedback to the client.

## Bug
The original code lacks proper handling for cases where the request body is empty or contains malformed JSON data. When an empty request body is sent, the server responds with a 400 Bad Request status but without a detailed error message, which makes it hard to understand the cause.  Similarly, if the request body is not valid JSON, the server behaves the same.  This makes the application less robust and harder to debug.