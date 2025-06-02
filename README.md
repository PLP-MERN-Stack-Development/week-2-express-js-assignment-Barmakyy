[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19694303&assignment_repo_type=AssignmentRepo)

# Express.js RESTful API

A RESTful API built with Express.js that implements CRUD operations for a product resource, along with middleware, error handling, and advanced features.

## Features

- RESTful API endpoints for product management
- Custom middleware for logging, authentication, and validation
- Error handling with appropriate status codes
- Advanced features including filtering, pagination, and search
- Product statistics endpoint

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-Barmakyy.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3000
   API_KEY=your-secret-api-key-here
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Documentation

### Authentication

All API endpoints require an API key to be included in the request headers:

```
X-API-Key: your-secret-api-key-here
```

### Endpoints

#### GET /api/products

List all products with optional filtering and pagination.

Query Parameters:

- `category`: Filter by product category
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `search`: Search products by name

Example Response:

```json
{
  "total": 3,
  "page": 1,
  "limit": 10,
  "products": [
    {
      "id": "1",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    }
  ]
}
```

#### GET /api/products/:id

Get a specific product by ID.

Example Response:

```json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
```

#### POST /api/products

Create a new product.

Request Body:

```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "category": "electronics",
  "inStock": true
}
```

#### PUT /api/products/:id

Update an existing product.

Request Body:

```json
{
  "name": "Updated Product",
  "description": "Updated description",
  "price": 149.99,
  "category": "electronics",
  "inStock": false
}
```

#### DELETE /api/products/:id

Delete a product.

#### GET /api/products/stats

Get product statistics.

Example Response:

```json
{
  "total": 3,
  "inStock": 2,
  "categories": {
    "electronics": 2,
    "kitchen": 1
  },
  "averagePrice": 683.33
}
```

## Error Handling

The API uses standard HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

Error responses include a message:

```json
{
  "error": "Error message here"
}
```

## Testing

You can test the API using tools like Postman, Insomnia, or curl. Make sure to include the API key in your requests.

Example curl command:

```bash
curl -H "X-API-Key: your-secret-api-key-here" http://localhost:3000/api/products
```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
