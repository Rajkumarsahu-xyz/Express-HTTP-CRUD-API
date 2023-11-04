const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');

const Todo = sequelize.define('todos', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iscompleted: {
    type: DataTypes.BOOLEAN
  }}, 
  {
    tableName: 'todos',
    timestamps: false
});
// console.log(Todo === sequelize.models.Todo);

module.exports = Todo;