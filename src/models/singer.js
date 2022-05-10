import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Singer = sequelize.define('Singer', {
  name: DataTypes.STRING,
  lastName: DataTypes.STRING,
  nationality: DataTypes.STRING,
});

await sequelize.sync();