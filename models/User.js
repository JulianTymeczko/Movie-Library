// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Initialize Movie model (table) by extending off Sequelize's Model class
class User extends Model {
  checkPassword(userPass) {
    return bcrypt.compareSync(userPass, this.password)
  }
}

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
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Add more fields as needed, such as description, genre, etc.
  },
  {
    hooks: {
      beforeCreate: async (newUser) => {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return newUser;
      },
      beforeUpdate: async (currentUser) => {
        currentUser.password = await bcrypt.hash(currentUser.password, 10);
        return currentUser;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;