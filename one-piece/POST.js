const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/onepiece/elements', (req, res) => {
    const newElements = req.body.elements;
    if (Array.isArray(newElements)) {
        res.json({
            message: 'The elements of One Piece have been successfully received!',
            elements: newElements
        });
    } else {
        res.status(400).json({ error:'The request body must contain an array' });
    }
});

app.post('/onepiece/concepts', (req, res) => {
    const newConcepts = req.body.concepts;
    if (Array.isArray(newConcepts)) {
        res.json({
            message: 'The concepts of One Piece have been successfully received!',
            concepts: newConcepts
        });
    } else {
        res.status(400).json({ error: 'The request body must contain an array' });
    }
});

app.post('/onepiece/characters', (req, res) => {
    const newCharacters = req.body.characters;
    if (Array.isArray(newCharacters)) {
        res.json({
            message:'The characters of One Piece have been successfully received!',
            characters: newCharacters
        });
    } else {
        res.status(400).json({ error: 'The request body must contain an array' });
    }
});

app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
});
