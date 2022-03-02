import * as api from "../Api/index.js";
import { actionsEnum } from "../ActionsEnum/ActionsEnum.js";

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

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: actionsEnum.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: actionsEnum.CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const authRegister = (user) => async (dispatch) => {
  try {
    const { data } = await api.registerAuth(user);
    dispatch({
      type: actionsEnum.LOGIN,
      payload: { _id: data._id, fname: data.fname, lname: data.lname },
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const authLogin = (user) => async (dispatch) => {
  try {
    const { data } = await api.loginAuth(user);
    dispatch({
      type: actionsEnum.LOGIN,
      payload: {
        _id: data._id,
        fname: data.fname,
        lname: data.lname,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
