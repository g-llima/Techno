import { combineReducers } from "redux";
import { actionsEnum } from "../ActionsEnum/ActionsEnum.js";

const posts = (posts = [], action) => {
  switch (action.type) {
    case actionsEnum.FETCH_ALL:
      return action.payload;
    case actionsEnum.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default combineReducers({ posts });
