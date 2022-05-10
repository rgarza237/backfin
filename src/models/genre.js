import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Genre = sequelize.define('Genre', {
  description: DataTypes.STRING,
});

await sequelize.sync();