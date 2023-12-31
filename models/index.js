// Import models
const Movie = require('./Movie');
const User = require('./User');

// const Actor = require('./Actor');
// const Character = require('./Character');
// const Category = require('./Category'); // Add this line to import the Category model

// Movies belongToMany Actors (through Character)
// Movie.belongsToMany(Actor, {
//   through: Character,
//   foreignKey: 'movie_id'
// });

// // Actors belongToMany Movies (through Character)
// Actor.belongsToMany(Movie, {
//   through: Character,
//   foreignKey: 'actor_id'
// });

// // Movies belong to Categories
// Movie.belongsTo(Category, {
//   foreignKey: 'category_id',
//   onDelete: 'CASCADE',
// });

// // Categories have many Movies
// Category.hasMany(Movie, {
//   foreignKey: 'category_id',
//   // onDelete: 'CASCADE',
// });

module.exports = {
  Movie,
  User,
  // Actor,
  // Character,
  // Category // Add Category to the exported object

}; 