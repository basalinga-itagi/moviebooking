import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(express.json());

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("Connected to Mongo");
  } catch (e) {
    console.log("error while connectig to mongo db");
  }
};

app.use("/api/user/", userRouter);
app.use("/api/auth/", authRouter);

app.listen(8088, () => {
  console.log("connected to port server");
  connectToDb();
});
