import app from "./src/app.js";
import sequelize from './src/database/database.js'
//import './src/models/user.js'

async function main(){
    try {
 //       await sequelize.sync( {force: true});
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
        app.listen(5432);
        console.log('server is listen on port 5432:)');
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }
}

main();