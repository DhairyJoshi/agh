import * as productActions from "./actions/ProductAction";
import * as galleryActions from "./actions/GalleryAction";
import * as teamActions from "./actions/TeamAction";

export const actionCreators = {
  ...productActions,
  ...galleryActions,
  ...teamActions,
};