const express = require('express');
const app = express();
app.use(express.json());

let books = [];

// 1. GET 
app.get('/books', (req, res) => {
    res.json(books);
});

// 2. POST
app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).json(book);
});

// 3. PUT
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});