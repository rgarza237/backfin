//const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
{
dialect: 'postgres' ,  
host: process.env.PG_HOST,
port:5432,
 //host: 'http://3.218.67.164',
})
console.log(process.env.PG_HOST)

//const sequelize = new Sequelize('postgres://roberto_garza:Enroute132:4000/roberto_hernandezdb')


export default sequelize;

