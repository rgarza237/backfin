import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    'roberto_garzadb', 
    'roberto_garza',
     'Enroute123',
{
 host: '127.0.0.1',
 dialect: 'postgres'
})

