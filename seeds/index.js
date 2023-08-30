const seedMovies = require('./movie-seeds'); // Update to your movie seed file
// const seedActors = require('./actor-seeds.js'); // Update to your actor seed file
// const seedCharacters = require('./character-seeds'); // Update to your character seed file
// const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedMovies(); // Call your movie seed function
  console.log('\n----- MOVIES SEEDED -----\n');

  // await seedActors(); // Call your actor seed function
  // console.log('\n----- ACTORS SEEDED -----\n');

  // await seedCharacters(); // Call your character seed function
  // console.log('\n----- CHARACTERS SEEDED -----\n');

  // await seedCategories();
  // console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();