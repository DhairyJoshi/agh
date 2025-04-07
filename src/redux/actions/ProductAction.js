import { PRODUCTS, PRODUCTS_ERR } from './ActionTypes';
import * as api from '../api/index';

export const GET_ALL_PRODUCTS = () => async (dispatch) => {
    try {
        const { data } = await api.agh_product_list_web();
        dispatch({ type: PRODUCTS, payload: data });
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({ type: PRODUCTS_ERR, payload: error });
    }
};