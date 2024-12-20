Ensure you follow the Model-View-Controller (MVC) pattern in your project structure. Here's an example of how the directories and files can be organized:
/recipes
│
├── /controllers
│   └── recipeController.js     # Handles CRUD operations
│
├── /models
│   └── recipeModel.js          # Mongoose schema for recipe
│
├── /routes
│   └── recipeRoutes.js         # Routes for recipe-related API endpoints
│
├── /views
│   └── (optional)              # If needed for a frontend (in this case, it's just API)
│
├── /config
│   └── db.js                   # MongoDB connection configuration
│
├── /middleware
│   └── errorHandler.js         # For error handling and validation middleware
│
├── /docs
│   └── postman_collection.json # Postman API collection (for testing)
│
├── app.js                      # Entry point of the application
├── package.json                # Dependencies and scripts
└── README.md                   # Project overview and instructions

Postman API Documentation
Use Postman to create a collection for testing and document your API.

Postman Setup: Test each of the API endpoints (e.g., Create, Read, Update, Delete).
Save Requests: Save each request (POST, GET, PUT, DELETE) and organize them under a collection.
Export Collection: Export the collection into a JSON file and include it in your docs folder (e.g., docs/postman_collection.json).

# Recipe CRUD Application

## Overview
This project is a Node.js application that implements CRUD (Create, Read, Update, Delete) operations for managing recipes. It uses Express.js for routing, Mongoose for MongoDB integration, and follows the MVC (Model-View-Controller) pattern.

## Features
- **Create Recipe**: Adds a new recipe to the database.
- **Read Recipes**: Retrieves all recipes or a specific recipe by ID.
- **Update Recipe**: Updates the details of an existing recipe.
- **Delete Recipe**: Deletes a recipe by its ID.

## Tech Stack
- **Node.js**
- **Express.js**
- **Mongoose (MongoDB)**

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone <repo_url>
    cd recipe-crud-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

4. The server will be running on `http://localhost:5000`.

## API Documentation

API documentation is available through the Postman collection:
- [Postman Collection](./docs/postman_collection.json)

## Routes

- `POST /api/recipes` - Create a new recipe
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a recipe by ID
- `PUT /api/recipes/:id` - Update a recipe by ID
- `DELETE /api/recipes/:id` - Delete a recipe by ID

## Deployment

The server is deployed on Render: [Render Deployment URL](https://recipes-me.onrender.com/api/recipes)

## License
This project is licensed under the MIT License.
