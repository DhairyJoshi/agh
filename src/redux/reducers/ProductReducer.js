const initialState = {
    products: [],
    categories: null,
    error: null,
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetchAllProducts':
            return {
                ...state,
                products: action.payload.products,
                categories: ['a', 'b', 'c'],
                error: null,
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