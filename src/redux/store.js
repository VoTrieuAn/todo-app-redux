import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducer";

import { createStore } from "redux";

// Sử dụng devtool
const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
