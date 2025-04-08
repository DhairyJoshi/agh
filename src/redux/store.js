import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Named import
import rootReducer from "./reducers";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // Apply the thunk middleware
);

export { store };