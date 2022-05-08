import app from "./src/app.js";
import { sequelize } from './src/database/database.js'
import './src/models/project.js'

async function main(){
    try {
        await sequelize.sync( {force: true});
        console.log("Connection has been established successfully");
        app.listen(5435);
        console.log('server is listen on port 5435:)');
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }
}

main();