import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("Connected to Mongo");
  } catch (e) {
    console.log("error while connectig to mongo db");
  }
};

app.use("/", (req, res) => {
  res.send("Hello");
});

app.listen(8088, () => {
  console.log("connected to port server");
  connectToDb();
});
