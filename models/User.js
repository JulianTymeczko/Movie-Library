// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Movie model (table) by extending off Sequelize's Model class
class User extends Model {}

// Set up fields and rules for Movie model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Add more fields as needed, such as description, genre, etc.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;