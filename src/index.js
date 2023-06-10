import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./routes/route.js";
dotenv.config();
const { PORT, URI } = process.env
const app = express();

app.use(express.json());
app.use("/functionup", router);
app.listen(PORT, () => {
    console.log("server started on PORT: ", PORT);
});
mongoose.connect(URI)
    .then(() => console.log("Connected to DB..."))
    .catch(err => console.log(err))
