import ActionTypes from "#/store/actions/constants.js";
import { createReducer } from "#/utils/createReducer.js";

const initialState = localStorage.getItem("formData")
  ? JSON.parse(localStorage.getItem("formData"))
  : [
      {
        value: "",
        name: "fullname",
      },
      {
        value: "",
        name: "email",
      },
      {
        value: "",
        name: "phone",
      },
      {
        value: "",
        name: "date",
      },
      {
        value: "",
        name: "message",
        isTextArea: true,
      },
    ];

export const formReducer = createReducer(initialState, {
  [ActionTypes.CHANGE_FIELD]: (state, action) => {
    const newState = [...state];
    newState[action.payload.index].value = action.payload.value;
    return newState;
  },
});
