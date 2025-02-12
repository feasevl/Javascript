const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//resolver o npm install mongoose
// setar ou encontrar a proxy do pc

mongoose.connect('mongodb://localhost:27017/onepiece', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

const ElementSchema = new mongoose.Schema({
  name: String,
});

const ConceptSchema = new mongoose.Schema({
  name: String,
});

const CharacterSchema = new mongoose.Schema({
  name: String,
});

const Element = mongoose.model('Element', ElementSchema);
const Concept = mongoose.model('Concept', ConceptSchema);
const Character = mongoose.model('Character', CharacterSchema);

app.get('/onepiece/elements', async (req, res) => {
  try {
    const elements = await Element.find();
    res.json(elements.map(element => element.name));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch elements' });
  }
});

app.get('/onepiece/concepts', async (req, res) => {
  try {
    const concepts = await Concept.find();
    res.json(concepts.map(concept => concept.name));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch concepts' });
  }
});

app.get('/onepiece/character', async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters.map(character => character.name));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch characters' });
  }
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});