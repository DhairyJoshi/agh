import * as Action from '../apis/ActionType'

const initialState = {
    products: null,
    categories: null,
    lastMinDeal: null,
    homeProducts: null,
    productDetails: null,
    cart: null,
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case Action.ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case Action.LAST_MIN_DEAL:
            return {
                ...state,
                lastMinDeal: action.payload,
            };
        case Action.HOME_PRODUCTS:
            return {
                ...state,
                homeProducts: action.payload,
            };
        case Action.PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload,
            };
        case Action.PRODUCT_DETAILS_NULL:
            return {
                ...state,
                productDetails: null,
            };
        case Action.ADD_TO_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case Action.CART:
            return {
                ...state,
                cartData: action.payload,
            };
        case Action.FILTERED:
            return {
                ...state,
                filtered: action.payload,
            };
        case Action.WISHLIST:
            return {
                ...state,
                wishlist: action.payload,
            };
        case Action.GET_WISHLIST:
            return {
                ...state,
                all_wishlist: action.payload,
            };
        case Action.SEARCH:
            return {
                ...state,
                search: action.payload,
            };

        default:
            return state;
    }
};

export default ProductReducer;
