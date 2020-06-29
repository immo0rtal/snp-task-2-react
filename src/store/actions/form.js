import ActionTypes from "./constants";

export const changeField = (payload) => {
  return { type: ActionTypes.CHANGE_FIELD, payload };
};
