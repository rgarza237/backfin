//const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize'

 const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
{
 host: 'localhost',
 //host: 'http://3.218.67.164',
 dialect: 'postgres'
})

export default sequelize;

