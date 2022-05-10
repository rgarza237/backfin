import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    'roberto_garzadb', 
    'roberto_garza',
     'Enroute123',
{
 host: 'http://3.218.67.164',
 dialect: -'postgres'
})

