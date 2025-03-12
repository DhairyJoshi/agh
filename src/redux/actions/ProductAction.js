export const GET_ALL_PRODUCTS = () => async (dispatch) => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        dispatch({ type: 'fetchAllProducts', payload: data });
    } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({ type: 'fetchAllProdsError', payload: error });
    }
};