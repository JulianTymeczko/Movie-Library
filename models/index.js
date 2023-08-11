// Import models
const Movie = require('./Movie');
const Actor = require('./Actor');
const Character = require('./Character');

// Movies belongToMany Actors (through Character)
Movie.belongsToMany(Actor, {
  through: Character,
  foreignKey: 'movie_id'
});

// Actors belongToMany Movies (through Character)
Actor.belongsToMany(Movie, {
  through: Character,
  foreignKey: 'actor_id'
});

module.exports = {
  Movie,
  Actor,
  Character
};