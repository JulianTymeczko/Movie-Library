const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Drama',
  },
  {
    category_name: 'Horror',
  },
  {
    category_name: 'Adventure',
  },
  {
    category_name: 'Mystery',
  },
  {
    category_name: 'Fantasy',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;