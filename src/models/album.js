import { Sequelize, Model, DataTypes } from 'sequelize';
//import {Song} from './song.js'
//import { Singer } from './singer.js'

const sequelize = new Sequelize('sqlite::memory:');

 export const Album = sequelize.define('Album', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  albumName: {
    type: DataTypes.STRING
    },
  creator: {
    type: DataTypes.STRING
    },
  releaseDate: {
    type: DataTypes.STRING
    },
  birthday: {
    type: DataTypes.STRING
    },
  price: {
    type: DataTypes.INTEGER
    },
  genre: {
    type: DataTypes.STRING
    },
  image: {
    type: DataTypes.STRING
    }
});



/*Album.hasMany(Song, {
  foreignKey: 'albumId',
  sourceKey: 'id'
})



Album.hasMany(Singer, {
  foreignKey: 'albumId',
  sourceKey: 'id'
})

Singer.belongsTo(Album,{
  foreignKey: 'albumId',
  targetId: 'id'
})


Song.belongsTo(Album, {
  foreignKey: 'albumId',
  targetId: 'id'
})*/

await sequelize.sync();