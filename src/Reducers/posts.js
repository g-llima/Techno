import { actionsEnum } from "../ActionsEnum/ActionsEnum.js";

export default (posts = [], action) => {
  switch (action.type) {
    case actionsEnum.FETCH_ALL:
      return action.payload;
    case actionsEnum.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
