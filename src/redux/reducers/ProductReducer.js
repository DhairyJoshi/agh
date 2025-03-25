const initialState = {
    products: [],
    error: null,
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return {
                ...state,
                products: action.payload.data,
            };
        case 'PRODUCTS_ERR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default ProductReducer;