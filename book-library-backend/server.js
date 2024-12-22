const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookLibrary', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error: ', err));


// Routes
app.use('/api/books', bookRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the Book Library Backend!');
});
app.get('/books', (req, res) => {
  res.send('List of books');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
