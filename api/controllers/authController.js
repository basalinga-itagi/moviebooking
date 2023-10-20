import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    var hashPassword = await bcrypt.hash(password, 12);
    console.log("body", req.body);
    const newUser = new User({
      username,
      email,
      hashPassword,
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
