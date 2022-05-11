import express from "express"
import projectRoutes from "./routes/projects.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use("/user",projectRoutes);



export default app;