import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Album = sequelize.define('Album', {
  name: DataTypes.STRING,
  singer: DataTypes.STRING,
  releaseDate: DataTypes.DATE,
  birthday: DataTypes.DATE,
// songs: 
  price: DataTypes.NUMBER,
  genre: DataTypes.STRING,
});

await sequelize.sync();