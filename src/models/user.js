import { Sequelize, Model, DataTypes } from 'sequelize';
import {Album} from './album.js'

const sequelize = new Sequelize('sqlite::memory:');
export const User = sequelize.define("users", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
  type: DataTypes.STRING
  },
  email:{
  type:   DataTypes.STRING
    },
  password:{
  type:   DataTypes.STRING
}
  /*usrOrAdmn:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }*/
});

await sequelize.sync();

