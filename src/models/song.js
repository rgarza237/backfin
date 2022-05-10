import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Song = sequelize.define('Song', {
  _id: DataTypes.STRING,
  name: DataTypes.STRING,
 // singer: 
//  album:
  releaseDate: DataTypes.DATE,
  duration: DataTypes.NUMBER,
  completeFile: DataTypes.STRING,
  previewFile: DataTypes.STRING,
});

await sequelize.sync();