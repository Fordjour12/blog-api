# Prisma and Express.js CRUD Operations for Blog Posts

This is a simple Node.js application that demonstrates how to perform CRUD operations (Create, Read, Update, Delete) on blog posts using Prisma as the ORM and Express.js as the web framework.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Database Configuration](#database-configuration)
  - [Starting the Server](#starting-the-server)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Prisma](https://www.prisma.io/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/prisma-express-crud.git

Navigate to the project directory:

bash
Copy code
cd prisma-express-crud
Install the project dependencies:

```bash
Copy code
npm install
# or
yarn install
```

Usage
Database Configuration
Set up your database configuration by editing the .env file:

```javascript
DATABASE_URL="postgresql://username:password@localhost:5432/database?m"
```

Replace username, password, localhost, 5432, and database with your actual database connection details.

Create and apply the database schema using Prisma:

```bash
npx prisma migrate dev
```

Starting the Server

Start the Express.js server:

```bash
npm start
# or
yarn start
Your server will be running at http://localhost:3000.
```

## API Endpoints

POST blog/create: Create a new blog post.
Request body:

```json
{
  "title": "New Post",
  "image":"http://link-to-image.jpg",
  "content": "This is the content of the new post.",
  "author": "John Maxwell"
}
```

GET blog/posts: Retrieve all blog posts.

GET blog/posts/:id: Retrieve a specific blog post by ID.

PUT blog/posts/:id: Update a specific blog post by ID.

Request body:

```json
{
  "title": "Updated Title",
  "content": "Updated content.",
  "image":"Updated link",

}
```

DELETE blog/posts/:id: Delete a specific blog post by ID.

## Contributing

Feel free to contribute to this project by opening issues, submitting pull requests, or suggesting improvements.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
