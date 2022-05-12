import app from "./src/app.js";
import sequelize from './src/database/database.js'
import './src/models/user.js'
import "./src/models/album.js"
import './src/models/singer.js'
import './src/models/song.js'


async function main(){
    try {
        await sequelize.sync();
//        await sequelize.authenticate();
        console.log("Connection has been established successfully");
        app.listen(4000);
        console.log('server is listen on port 4000:)');
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }
}

main();