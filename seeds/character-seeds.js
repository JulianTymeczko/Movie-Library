const { Character } = require('../models'); // Make sure to use the correct model name

const characterData = [
  {
    character_name: 'Andy Dufresne', // Character in Shawshank Redemption
  },
  {
    character_name: 'Jack Torrance', // Character in The Shining
  },
  {
    character_name: 'Carrie White', // Character in Carrie
  },
  {
    character_name: 'Pennywise', // Character in It
  },
  {
    character_name: 'Gordie Lachance', // Character in Stand by Me
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;

