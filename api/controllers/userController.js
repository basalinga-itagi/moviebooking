import User from "../models/User.js";

export const getAllUsers = async (req, res, next) => {
  const allUsers = await User.find({});
  res.status(200).json(allUsers);
};
