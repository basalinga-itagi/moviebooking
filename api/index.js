import express from "express";
const app = express();

app.use("/", (req, res) => {
  res.send("Hello");
});

app.listen(8088, () => {
  console.log("connected to db");
});
