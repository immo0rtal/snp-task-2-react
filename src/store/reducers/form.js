import ActionTypes from "#/store/actions/constants.js";
import { createReducer } from "#/utils/createReducer.js";

const initialState = [
  {
    name: "Full-name: ",
    value: "",
  },
  {
    name: "Email: ",
    value: "",
  },
  {
    name: "Phone: ",
    value: "",
  },
  {
    name: "Date: ",
    value: "",
  },
  {
    name: "Message: ",
    value: "",
  },
];

export const formReducer = createReducer(initialState, {
  [ActionTypes.CHANGE_FIELD]: (state, action) => {
    const newState = [...state];
    newState[action.payload.index].value = action.payload.value;
    return newState;
  },
});
