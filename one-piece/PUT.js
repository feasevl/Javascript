const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let elements = ['One Piece', 'Akuma no mi', 'Ancient weapons', 'Teriunbytos', 'Lunares', 'Void century'];
let concepts = ['Will of D', 'Joyboy', 'Haki'];
let characters = ['Nika', 'Imu-sama', 'Zunesha', 'Monkey D Dragon', 'Shirahoshi', 'Gold D Joger', 'Xebec', 'Marshall D Teach'];

app.put('/joyboy/elements/:element', (req, res) => {
    const elements = req.params.elements;
    const newElement = req.body.elements;
    const index = elements.indexOf(elements);

    if (index > -1 && newElements) {
        elements[index] = newElement;
        res.json({
            message: `Element "${elements}" updated to "${newElement}".`,
            elements
        });
    } else {
        res.status(400).json({ error: 'Element not found or invalid data.' });
    }
});

app.put('/joyboy/concepts/:concept', (req, res) => {
    const concepts = req.params.concepts;
    const newConcept = req.body.concepts;
    const index = concepts.indexOf(concepts);

    if (index > -1 && newConcepts) {
        concepts[index] = newConcept;
        res.json({
            message: `Concept "${concepts}" updated to "${newConcept}".`,
            concepts
        });
    } else {
        res.status(400).json({ error: 'Concept not found or invalid data.' });
    }
});

app.put('/joyboy/characters/:character', (req, res) => {
    const characters = req.params.characters;
    const newCharacter = req.body.personagem;
    const index = characters.indexOf(characters);

    if (index > -1 && newCharacter) {
        characters[index] = newCharacter;
        res.json({
            message: `Character "${characters}" updated to "${newCharacter}".`,
            characters
        });
    } else {
        res.status(400).json({ error: 'Character not found or invalid data.' });
    }
});

app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
});
