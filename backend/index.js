import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import filesRouter from "./routes/files.js";

const PORT = process.env.PORT;
await mongoose.connect(process.env.MONGO_URI);
const app = express();

app.use(
  cors({
    origin: process.env.FRONT_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use("api/files")

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is Running : ${PORT}`);
});
