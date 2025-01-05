Task Management API

This project is a task management API that allows users to register, login, create, update, view, and delete tasks. It is built with Node.js, Express, MySQL, and JWT authentication. The database is hosted on Clever Cloud, and the application is deployed on Render.

Features

User Registration and Login: Allows users to sign up and log in with JWT-based authentication.

Task Management: Users can create, retrieve, update, and delete tasks.

JWT Authentication: Ensures that only authenticated users can access task management features.

Prerequisites

Node.js (version 14 or later)

MySQL database

Clever Cloud account for hosting the database

.env file for environment variables

Setup Instructions

1. Clone the repository

bash
git clone https://github.com/raghavarora01/Todo-Api.git
cd task-management-api

2. Install Dependencies
Install the necessary dependencies:

bash
Copy code
npm install

3. Configure Environment Variables
Create a .env file in the root of your project and add the following environment variables:

bash
Copy code
MYSQL_ADDON_HOST=<your-mysql-host>

MYSQL_ADDON_USER=<your-mysql-user>

MYSQL_ADDON_PASSWORD=<your-mysql-password>

MYSQL_ADDON_DB=<your-database-name>

MYSQL_ADDON_PORT=<your-database-port>

SECURITY_KEY=<your-secret-key>

You can find these details in your Clever Cloud dashboard for the database.


4. Run the Project Locally

Start the server by running the following command:


bash
Copy code
npm start
This will start the server on http://localhost:9898.

5. Testing the API

You can now use tools like Postman or CURL to interact with the API.

Register a User:

POST: http://localhost:9898/api/auth/register

Body: { "username": "your_username", "password": "your_password" }

Login a User:

POST: http://localhost:9898/api/auth/login

Body: { "username": "your_username", "password": "your_password" }

Create a Task:

POST: http://localhost:9898/api/tasks/

Body: { "title": "Task Title", "description": "Task Description" }

Get All Tasks:

GET: http://localhost:9898/api/tasks/

Get Task by ID:

GET: http://localhost:9898/api/tasks/:id

Update Task Status:

PUT: http://localhost:9898/api/tasks/:id

Body: { "status": "in-progress" }

Delete Task:

DELETE: http://localhost:9898/api/tasks/:id

6. Deployment

This application is deployed on Render. You can access the live API here:

https://todo-api-rvn0.onrender.com

To deploy your own application on Render, follow these steps:

Sign up and log in to Render.

Create a new web service and connect it to your GitHub repository.

Set up environment variables in Render for the MySQL connection and JWT secret.

Deploy the application.

7. Using the Render Deployment

The deployed API on Render works the same way as the local version. You can interact with it using the same endpoints as mentioned earlier:

Register a User:

POST: https://todo-api-rvn0.onrender.com/api/auth/register

Login a User:

POST: https://todo-api-rvn0.onrender.com/api/auth/login

Create a Task:

POST: https://todo-api-rvn0.onrender.com/api/tasks/

Get All Tasks:

GET: https://todo-api-rvn0.onrender.com/api/tasks/

Get Task by ID:

GET: https://todo-api-rvn0.onrender.com/api/tasks/:id

Update Task Status:

PUT: https://todo-api-rvn0.onrender.com/api/tasks/:id

Delete Task:

DELETE: https://todo-api-rvn0.onrender.com/api/tasks/:id
