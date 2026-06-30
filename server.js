const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    //res.send('Hello, Welcome to my API!');
    res.status(200).json({ message: 'Hello, Welcome to my API!' });
});

app.get('/api/users', (req, res) => {
    res.status(200).json(
        { id: 1, name: 'John Doe', },
        { id: 2, name: 'Jane Smith', },
    );
});

app.get('/api/products', (req, res) => {
    res.status(200).json(
        { id: 1, name: 'notebook', price: 350 },
    );
});

const  PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});