
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 2000;

app.use(bodyParser.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'Dorm',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to database');
});

// Sign Up Endpoint
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    const query = `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`;
    db.query(query, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Database error' });
        } else {
            res.status(201).json({ message: 'User registered successfully' });
        }
    });
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Database error' });
        } else if (results.length > 0) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
