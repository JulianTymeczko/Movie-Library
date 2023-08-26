// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Character model (table) by extending off Sequelize's Model class
class Character extends Model {}

// Set up fields and rules for Character model
Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Add more fields as needed, such as description, role, etc.
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movie',
        ref: 'id'
      }
    },
    actor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'actor',
        ref: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;