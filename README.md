# Book Library App

A full-stack application consisting of a **Frontend** built with **Angular** and a **Backend** built with **Express.js** and **MongoDB**.

## Getting Started

Follow the steps below to get the application up and running locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (for backend and frontend)
- [MongoDB](https://www.mongodb.com/try/download/community) (for database)
- [Angular CLI](https://angular.io/cli) (for frontend development)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/book-library-app.git
   cd book-library-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and add your MongoDB connection string:
   ```bash
   MONGO_URI=mongodb://localhost:27017/bookLibrary
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. In a separate terminal, navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install Angular dependencies:
   ```bash
   npm install
   ```

3. Start the Angular development server:
   ```bash
   ng serve
   ```

Your application will now be running at `http://localhost:4200`.

### API Details

#### 1. **GET /api/books**
- Retrieves the list of all books in the library.
- Response:
  ```json
  [
    {
      "title": "Book Title",
      "author": "Author Name",
      "genre": "Genre"
    }
  ]
  ```

#### 2. **POST /api/books**
- Adds a new book to the library.
- Request body:
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "genre": "Genre"
  }
  ```

- Response:
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "genre": "Genre",
    "_id": "book-id"
  }
  ```

### Testing the App
- Use **Postman** to test the API by sending **GET** and **POST** requests to `http://localhost:3000/api/books`.
- The Angular app should interact with the backend seamlessly.

## Contributing

Feel free to fork the repo, open issues, and submit pull requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
