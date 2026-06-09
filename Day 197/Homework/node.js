const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let products = [];

// 1. GET 
app.get('/users', (req, res) => {
    res.json(users);
});

// 2. POST 
app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

// 3. PUT
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        res.json(users[index]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});