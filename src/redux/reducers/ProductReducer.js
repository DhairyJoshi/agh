const initialState = {
    products: [],
    error: null,
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetchAllProducts':
            return {
                ...state,
                products: action.payload.data,
            };
        case 'fetchAllProdsError':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default ProductReducer;