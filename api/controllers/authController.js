import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    var hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      username,
      email,
      password:hashPassword,
    });
    await newUser.save();
    res
      .status(200)
      .json({ message: "user created successfully", user: newUser });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      res.status(400).send("user email is not correct");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
