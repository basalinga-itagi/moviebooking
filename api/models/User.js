import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.model("User", userSchema);
