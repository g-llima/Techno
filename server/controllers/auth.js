import userModel from "../models/userSchema.js";
import bycrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  const data = req.body;

  data.pass = await bycrypt.hash(data.pass, 10);
  const registerUser = new userModel(data);

  try {
    await registerUser.save();
    res.status(201).json(registerUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
