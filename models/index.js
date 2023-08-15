// Import models
const Movie = require('./Movie');
const Actor = require('./Actor');
const Character = require('./Character');
const Category = require('./Category'); // Add this line to import the Category model

// Movies belongToMany Actors (through Character)
Movie.hasOne(Actor, {
  through: Character,
  foreignKey: 'movie_id'
});

// Actors belongToMany Movies (through Character)
Actor.hasOne(Movie, {
  through: Character,
  foreignKey: 'actor_id'
});

// Movies belong to Categories
Movie.hasOne(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Movies
Category.hasOne(Movie, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Movie,
  Actor,
  Character,
  Category // Add Category to the exported object
};