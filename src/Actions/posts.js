import * as api from "../Api/index.js";
import { actionsEnum } from "../ActionsEnum/ActionsEnum.js";

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
