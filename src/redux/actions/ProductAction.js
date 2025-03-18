export const GET_ALL_PRODUCTS = () => async (dispatch) => {
    try {
        const response = await fetch('https://api.farmerconnects.com/api/all_product_list/', {
            method : 'POST'
        });
        const data = await response.json();
        dispatch({ type: 'fetchAllProducts', payload: data });
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({ type: 'fetchAllProdsError', payload: error });
    }
};