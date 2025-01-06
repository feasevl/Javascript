const express = require('express');
const app = express();
const port = 3000;

app.get('/onepiece/elements', (req, res) => {
    res.json(['One Piece', 'Akuma no mi', 'Ancient weapons', 'Teriunbytos', 'Lunares', 'Void century']);
});

app.get('/onepiece/concepts', (req, res) => {
    res.json(['Will of D', 'Joyboy', 'Haki']);
});

app.get('/onepiece/character', (req, res) => {
    res.json(['Nika', 'Imu-sama', 'Zunesha', 'Monkey D Dragon', 'Shirahoshi',  'Gold D Joger', 'Xebec', 'Marshall D Teach']);
});

app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
});
