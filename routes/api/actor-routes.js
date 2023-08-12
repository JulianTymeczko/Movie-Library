// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Actor model (table) by extending off Sequelize's Model class
class Actor extends Model {}

// Set up fields and rules for Actor model
Actor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    actor_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // Add more fields as needed, such as date_of_birth, nationality, etc.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'actor',
  }
);

module.exports = Actor;