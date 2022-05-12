import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

export const Song = sequelize.define('Song', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type: DataTypes.STRING
    },
  releaseDate: {
    type: DataTypes.STRING
    },
  duration: {
    type: DataTypes.STRING
    },
  completeFile: {
    type: DataTypes.STRING
    }
});

await sequelize.sync();