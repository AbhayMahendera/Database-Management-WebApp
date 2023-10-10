

---

# Assignment Two: Node.js and Express Web Application

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [User Authentication](#user-authentication)
- [List View and Pagination](#list-view-and-pagination)
- [Detail Page](#detail-page)

## Introduction

This Node.js and Express web application is part of Assignment Two for building a web application with authentication and pagination. The application displays a list of users, allows user authentication, and provides detailed user information on a separate page.

## Prerequisites

Before running the application, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): Download and install Node.js, which includes npm (Node Package Manager).

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <[https://github.com/AbhayMahendera/WEB322-Abhay-Mahendera](https://github.com/AbhayMahendera/WEB322-Abhay-Mahendera)>
   cd assgn2
   ```


2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Application:**

   ```bash
   npm start
   ```

   The application will be running at [http://localhost:3000](http://localhost:3000).

## User Authentication

- Access the authentication page by opening your web browser and going to [http://localhost:3000](http://localhost:3000).
- Use the provided hard-coded credentials (username and password) to log in from the file [fakeUsers.json](https://github.com/AbhayMahendera/WEB322-Abhay-Mahendera/blob/assgn-two/assgn2/fakeUsers.json)

## List View and Pagination

- After successful login, you will be redirected to the paginated list view of users.
- By default, the list displays the first 25 users.

## Detail Page

- Click on a user in the list view to navigate to the user's detail page.
- The detail page displays additional information about the selected user.
- Use the provided navigation element to return to the paginated list view.
