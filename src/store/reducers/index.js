import { combineReducers } from "redux";
import { formReducer } from "./form.js";

export const rootLevelReducer = combineReducers({
  form: formReducer,
});