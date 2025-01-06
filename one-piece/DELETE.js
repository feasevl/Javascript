const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let elements = ['One Piece', 'Akuma no mi', 'Ancient weapons', 'Teriunbytos', 'Lunares', 'Void century'];
let concepts = ['Will of D', 'Joyboy', 'Haki'];
let characters = ['Nika', 'Imu-sama', 'Zunesha', 'Monkey D Dragon', 'Shirahoshi', 'Gold D Joger', 'Xebec', 'Marshall D Teach'];

app.delete('/onepiece', (req, res) => {
    const { type, name } = req.body;

    if (!type || !name) {
        return res.status(400).json({ error: 'You must provide “type” and “name” in the body of the request.' });
    }

    let dataArray = [];
    let typeMessage = '';

    switch (type) {
        case 'elements':
            dataArray = elements;
            typeMessage = 'Elements';
            break;
        case 'concepts':
            dataArray = concepts;
            typeMessage = 'Concepts';
            break;
        case 'characters':
            dataArray = characters;
            typeMessage = 'Characters';
            break;
        default:
            return res.status(400).json({ error: 'Invalid type. Use “element”, “concept” or “character”.' });
    }

    const index = dataArray.indexOf(name);
    if (index > -1) {
        dataArray.splice(index, 1);
        res.json({
            message: `${typeMessage} "${name}" successfully removed!`,
            [type + 's']: dataArray
        });
    } else {
        res.status(404).json({ error: `${typeMessage} "${name}" not found.` });
    }
});

app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
});

