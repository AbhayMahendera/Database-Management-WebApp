# Assignment Three: Refactoring and REST Endpoints

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Code Refactoring](#code-refactoring)
- [REST Endpoints](#rest-endpoints)
- [Service Modules](#service-modules)
- [Patch Notes](#patch-notes)

## Introduction

This Node.js and Express web application is part of Assignment Three, focusing on code cleanup, refactoring, and the addition of REST endpoints. The application now features organized code structure, RESTful API endpoints for users and products, and service modules for authentication, products, and users.

## Prerequisites

Before running the application, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): Download and install Node.js, which includes npm (Node Package Manager).

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/AbhayMahendera/WEB322-Abhay-Mahendera
   cd assgn3
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Application:**

   ```bash
   npm start
   ```

   The application will be running at [http://localhost:8000](http://localhost:8000).

## Code Refactoring

- The code has been organized into separate modules for routes, models, and services.
- CRUD operations for users and products are now handled in dedicated model modules.
- Routers and controllers have been organized accordingly.

## REST Endpoints

### Users

- **GET /api/users:** Returns all users as a JSON array.
- **GET /api/users/:id:** Returns a single user by ID as JSON.
- **DELETE /api/users/:id:** Deletes a single user by ID and returns a JSON object with a success message.
- **POST /api/users:** Adds a user to the users array and returns the new user as JSON.

### Products

- **GET /api/products:** Returns all products as a JSON array.
- **GET /api/products/:id:** Returns a single product by ID as JSON.
- **DELETE /api/products/:id:** Deletes a single product by ID and returns a JSON object with a success message.
- **POST /api/products:** Adds a product to the products array and returns the new product as JSON.

### Authentication

- **POST /api/login:** Accepts email and password in the body. If the email exists in the array of users and the user isAdmin, sends back {isAuthenticated: true}. If the user does not exist, sends back status 401 with {isAuthenticated: false}.

## Service Modules

- **AuthService:** Handles user authentication based on the provided email and password.
- **UsersService:** Provides CRUD operations for users.
- **ProductsService:** Provides CRUD operations for products.

## Patch Notes

1. Updated visuals for improved user experience.
2. Added an option to view the list on the login page.
3. Detailed view of users can only be seen after login.
4. Added a logout button (after login on the list view page) and a home button (on the list view page if opened without login).
5. Added a "remember me" option that works using cookies.