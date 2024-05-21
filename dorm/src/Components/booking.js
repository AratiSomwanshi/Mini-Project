const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 6800;

app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'booking',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to database');
});


app.post('/saveBooking', (req, res) => {
    const { name, contact, city, price } = req.body;

    const query = 'INSERT INTO bookings (name, contact, city, price) VALUES (?, ?, ?, ?,?)';
    db.query(query, [id,name, contact, city, price], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Database error' });
        } else {
            res.status(201).json({ message: 'Booking saved successfully' });
        }
    });
});
app.post('/cancelBooking', (req, res) => {
    const { bookingId } = req.body;

    const query = 'DELETE FROM bookings WHERE  id= ?';
    db.query(query, [bookingId], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Database error' });
        } else {
            res.status(200).json({ message: 'Booking cancelled successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});