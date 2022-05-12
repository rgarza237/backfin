import express from "express"
import userRoutes from "./routes/users.routes.js";
import albumRoutes from "./routes/albums.routes.js"
import singerRoutes from "./routes/singers.routes.js"
import songRoutes from "./routes/songs.routes.js"

const app = express();

//middlewares
app.use(express.json());

app.use("/user",userRoutes);
app.use("/album",albumRoutes);
app.use("/singer",singerRoutes);
app.use("/song", songRoutes);



export default app;