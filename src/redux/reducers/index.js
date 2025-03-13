import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import * as ProductActions from "../actions/ProductAction"; // Ensure correct path

export const actionCreators = {
    ...ProductActions, // Spread all actions inside the object
};

const reducers = combineReducers({
    productReducer: ProductReducer, // Store under productState key
});

export default reducers;