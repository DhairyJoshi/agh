import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import GalleryReducer from "./GalleryReducer";
import TeamReducer from "./TeamReducer";

const reducers = combineReducers({
    productReducer: ProductReducer, // Store under productState key
    galleryReducer: GalleryReducer,
    teamReducer: TeamReducer,
});

export default reducers;