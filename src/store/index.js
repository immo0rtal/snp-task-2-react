  
import { createStore, compose } from "redux";
import { rootLevelReducer } from "./reducers/index.js";

const store = (() => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers();
  return createStore(rootLevelReducer, enhancer);
})();

export default store;