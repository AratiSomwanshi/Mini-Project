
app.put('/update/:username', (req, res) => {
    const { password, email } = req.body;
    const { username } = req.params;
    const query = 'UPDATE users SET password = ?, email = ? WHERE username = ?';
    db.query(query, [password, email, username], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Database error' });
        } else {
            res.status(200).json({ message: 'User updated successfully' });
        }
    });
});


app.delete('/delete/:username', (req, res) => {
    const { username } = req.params;
    const query = 'DELETE FROM users WHERE username = ?';
    db.query(query, [username], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Database error' });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    });
});