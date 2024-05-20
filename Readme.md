# Blog API

## This is a simple Express.js RESTful API for a blogging platform. It includes the following functionalities:

### Setup & Configure Express Server
- Install Express
- Create an app.js file with a basic server setup
- Run the server using npm start
- Connect to MongoDB using Mongoose

### Install Mongoose
- Set up the database connection in app.js

### User Registration

1. Implement a POST route /register to handle new user sign up

- Save user data to the MongoDB database
- User Authentication
- Localhost API -: http://localhost:5000/api/user/register

2. Implement a POST route /login to handle user login

- Verify user credentials from the MongoDB database
- Localhost API -: http://localhost:5000/api/user/login

### Creating a New Blog Post

1. Implement a POST route /posts to handle creation of a new blog post
- Save blog posts to the MongoDB database
- Properly define schemas for Users and Blog Posts
- Localhost API -: http://localhost:5000/api/post/blog

### Running the Server

- Clone this repository
- Install dependencies: npm install / npm i 
- Start the server: npm start / npm run dev

### API Endpoints

1. POST /register: Register a new user
- Required fields: username, password, email, phone
- POST -: http://localhost:5000/api/user/register
- BODY -> row -> JSON

```json
    {
        "username" : "vaibhavchvn",
        "email" : "vaibhavchvn95@gmail.com",
        "password" : "vaibhav@123",
        "phone" : 8275269757
    }
```

2. POST /login: Authenticate user login
- Required fields: username, password
- POST -:  http://localhost:5000/api/user/login
- BODY -> row -> JSON

```json
    {
        "email" : "vaibhavchvn95@gmail.com",
        "password" : "vaibhav@123"
    }
```

3. POST /posts: Create a new blog post
- Required fields: title, content, author
- POST -: http://localhost:5000/api/post/blog
- BODY -> row -> JSON 

```json
    {
        "title" : "What is node.js",
        "content" : "Node.js is a javascript runtime environment",
        "author" :  "65d5ac7b9644de6681d6df01"
    }
```