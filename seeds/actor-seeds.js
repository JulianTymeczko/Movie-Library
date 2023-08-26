const { Actor } = require('../models'); // Make sure to use the correct model name

const actorData = [
  {
    actor_name: 'Tim Robbins', // Actor for Shawshank Redemption
  },
  {
    actor_name: 'Jack Nicholson', // Actor for The Shining
  },
  {
    actor_name: 'Sissy Spacek', // Actor for Carrie
  },
  {
    actor_name: 'Bill Skarsgård', // Actor for It
  },
  {
    actor_name: 'Wil Wheaton', // Actor for Stand by Me
  },
];

const seedActors = () => Actor.bulkCreate(actorData);

module.exports = seedActors;

