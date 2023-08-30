// Import models
const Movie = require('./Movie');
<<<<<<< HEAD
const Actor = require('./Actor');
const Character = require('./Character');
const Category = require('./Category'); // Add this line to import the Category model
const User = require('./User')
=======
// const Actor = require('./Actor');
// const Character = require('./Character');
// const Category = require('./Category'); // Add this line to import the Category model

>>>>>>> 218de475179cfea3f1e508148d28a0d92aace4ed
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
<<<<<<< HEAD
  Actor,
  Character,
  Category, // Add Category to the exported object
  User
=======
  // Actor,
  // Character,
  // Category // Add Category to the exported object
>>>>>>> 218de475179cfea3f1e508148d28a0d92aace4ed
}; 