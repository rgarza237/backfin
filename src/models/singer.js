import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

export const Singer = sequelize.define('Singer', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
    },
  lastName: {
    type: DataTypes.STRING
    },
  nationality: {
    type: DataTypes.STRING
    }
});

await sequelize.sync();