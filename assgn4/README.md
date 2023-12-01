# Assignment Four: Replacing Fake Data Files with Database Integration

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [CRUD Endpoints for Orders](#crud-endpoints-for-orders)
- [Database Integration](#database-integration)
- [Code Quality](#code-quality)
- [Documentation](#documentation)
- [Submission](#submission)
- [Evaluation Criteria](#evaluation-criteria)
- [Login Credentials](#Login-Credentials)
- [Web Application Patch Notes](#web-application-patch-notes)

## Introduction

This Node.js and Express web application is part of Assignment Four, focusing on replacing static data files with database integration. The assignment involves creating CRUD operations for Users, Products, and introducing a new class called Orders.

## Prerequisites

Before running the application, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): Download and install Node.js, which includes npm (Node Package Manager).
- [PostgreSQL](https://www.postgresql.org/): Set up the database following the instructions provided in the course text.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/AbhayMahendera/WEB322-Abhay-Mahendera
   cd assgn4
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   To run your application locally, you'll need the following dependencies:

- **Node.js and npm**: Ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from the official website: [Node.js](https://nodejs.org/)

- **PostgreSQL Database**: Since you're using PostgreSQL, you need to have a PostgreSQL database server running. You can download it from the official PostgreSQL website: [PostgreSQL](https://www.postgresql.org/download/)

- **pgAdmin**: pgAdmin is a popular administration and management tool for PostgreSQL. You can download it from the official pgAdmin website: [pgAdmin](https://www.pgadmin.org/download/)

- **Text Editor or IDE**: You can use any text editor or integrated development environment (IDE) of your choice. Some popular ones include Visual Studio Code, Atom, Sublime Text, or WebStorm.

After installing Node.js and PostgreSQL, follow these steps:

- Open a terminal or command prompt and navigate to your project directory.
- Run `npm install` to install the project dependencies specified in your `package.json` file. This will install packages like Express, Sequelize, EJS, etc.

Make sure your PostgreSQL server is running, and you have configured your application to connect to the correct database.

Once everything is set up, you can start your application by running `npm start` or `node app.js` from the terminal in your project directory. Access your application in a web browser at `http://localhost:3000` or the port you have configured.

Remember to update any configuration files in your project (like database connection settings) to match your local PostgreSQL setup.

3. **Start the Application:**

   ```bash
   npm start
   ```

   The application will be running at [http://localhost:3000](http://localhost:3000).

## Database Setup

- Follow the instructions in the course text to set up either a PostgreSQL relational database or MongoDB.

## CRUD Endpoints for Orders

### 1. GET /api/orders

- Returns all orders from the orders array as a JSON array.

### 2. GET /api/orders/:id

- Returns a single order by ID as JSON.

### 3. DELETE /api/orders/:id

- Deletes a single order by ID and returns a JSON object with a success message.

### 4. POST /api/orders

- Adds an order to the orders array and returns the new order as JSON.

## Database Integration

- Establish a connection to the selected database from the `app.js` file.

## Code Quality

- Write clean, well-organized, and commented code.
- Follow best practices for routing and middleware in Express.

## Documentation

- Document the codebase with clear comments explaining the functionality of each module, route, and function.

## Submission

- Submit your assignment by pushing your code to the provided repository.

## Evaluation Criteria

The assignment will be evaluated based on functionality, code quality, documentation, and adherence to the submission method using Git.

## Login Credentials

### Regular Users:
There are approximately a thousand credentials available for regular users. Feel free to use the following samples:

1. Email: kekwjsr@gmail.com
   Password: 111111

2. Email: Carroll.Braun@gmail.com
   Password: _giQTmnOWw79gRK

### Admin Interface:
For accessing the admin interface, use the following credentials:

1. Email: bqchristie@myseneca.ca
   Password: web322@senecaC

2. Email: admin@seneca.com
   Password: admin@seneca

## Web Application Patch Notes

### Version 4.1.0

#### General Updates:

1. **Visual Overhaul:**
   - The website has undergone a visual transformation with a new theme inspired by Sneakers, providing a fresh and modern look.

#### User Management:

2. **User List and Details:**
   - Regular users can now log in and view a list of other users along with their details.
   - Note: In Assignment 5, this feature will be updated to show products instead of other users.

3. **Admin Features:**
   - Two admin accounts have been deployed with capabilities such as:
     - Viewing the website as a visitor.
     - Performing CRUD operations on the products list (upcoming in Assignment 5).
     - Performing CRUD operations on the users list.
     - Viewing and managing orders placed (currently labeled as transactions, to be updated in Assignment 5).

4. **Account Creation:**
   - Added an option for users to create a new account easily (functional for admins on the admin panel).

5. **Forgot Password Functionality:**
   - Implemented a "Forgot Password" option for users to reset their passwords.

6. **Enhanced Email Functionality:**
   - The email link is now a clickable link that redirects users to their default email application on the device.

7. **Improved Admin Contact Form:**
   - When contacting the admin through the forgot password form, the data filled in the form is now automatically populated in the email for a more seamless communication process.

#### Bug Fixes:

- Resolved an issue that took three days to solve, related to a silly mistake. This prevented the implementation of the product viewing feature for regular users in Assignment 4. The fix will be reflected in Assignment 5.

#### Coming Soon (Assignment 5):

- Updates to the user interface and functionality to showcase products instead of other users for regular users.
- Further enhancements to the order management system.

**Note:**
Some features may be non-functional due to the fact that they will be required in Assignment 5. Additionally, a tight deadline schedule and involvement in multiple projects might have caused delays in certain areas. Your understanding is appreciated.

GitHub Repository: [WEB322-Abhay-Mahendera](https://github.com/AbhayMahendera/WEB322
