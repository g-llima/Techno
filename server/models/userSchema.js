import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
  },
  { collection: "users" }
);

const userModel = mongoose.model("UserSchema", userSchema);

export default userModel;
