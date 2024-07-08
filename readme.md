# REST API Backend with Express.js and PostgreSQL

## Introduction

This is a simple REST API built using Express.js and PostgreSQL for managing users. The API supports creating, retrieving, updating, and deleting user information.

## Features

- Create a new user
- Retrieve a user by ID
- Update a user's information by ID
- Delete a user by ID

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Setup

### 1. Clone the repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure the Database

Create a PostgreSQL database and a user with the necessary permissions. Update the database configuration in your application.

Example configuration in `.env` file:

```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_NAME=your_database_name
POSTGRES_USER=your_database_user
POSTGRES_PASSWORD=your_database_password

```

### 4. Start the Server

```sh
npm start
```

The server will start on `http://localhost:3002`.

## API Endpoints

### Create a New User

- **Endpoint:** `POST /users`
- **Description:** Creates a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
  }
  ```

### Retrieve a User by ID

- **Endpoint:** `GET /users/:id`
- **Description:** Retrieves a user by ID.
- **URL Params:**
  - `id`: The ID of the user to retrieve.

### Update a User's Information

- **Endpoint:** `PUT /users/:id`
- **Description:** Updates a user's information.
- **URL Params:**
  - `id`: The ID of the user to update.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@newdomain.com"
  }
  ```

### Delete a User

- **Endpoint:** `DELETE /users/:id`
- **Description:** Deletes a user.
- **URL Params:**
  - `id`: The ID of the user to delete.


## Dependencies

- Express.js
- Sequelize (for ORM)
- PostgreSQL
- bcrypt (for password hashing)

## Usage

### Example Request

Create a new user:

```sh
curl -X POST http://localhost:3002/users -H "Content-Type: application/json" -d '{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}'
```

Retrieve a user:

```sh
curl -X GET http://localhost:3002/users/1
```

Update a user:

```sh
curl -X PUT http://localhost:3002/users/1 -H "Content-Type: application/json" -d '{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}'
```

Delete a user:

```sh
curl -X DELETE http://localhost:3002/users/1
```
