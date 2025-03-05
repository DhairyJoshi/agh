import axios from "axios";
import * as api from "../apis/Api";
import * as action from "../apis/ActionType";

export const getAllProducts = (formData) => async (dispatch) => {
    try {
        const { data } = await api.all_product_list(formData);
        dispatch({ type: action.ALL_PRODUCTS, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const getAllCategories = (formData) => async (dispatch) => {
    try {
        const { data } = await api.all_category_list(formData);
        dispatch({ type: action.ALL_CATEGORIES, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const getLastminutesDeal = (formData) => async (dispatch) => {
    try {
        const { data } = await api.all_last_min_deal_list(formData);
        dispatch({ type: action.LAST_MIN_DEAL, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const getHomePageProducts = (formData) => async (dispatch) => {
    try {
        const { data } = await api.best_selling_product(formData);
        dispatch({ type: action.HOME_PRODUCTS, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const getProductDetails = (formData) => async (dispatch) => {
    try {
        dispatch({ type: action.PRODUCT_DETAILS_NULL, payload: null });

        const { data } = await api.product_details_web(formData);
        dispatch({ type: action.PRODUCT_DETAILS, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const addtoCart = (formData) => async (dispatch) => {
    try {

        const { data } = await api.add_to_cart(formData);
        dispatch({ type: action.ADD_TO_CART, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const wishlist_update = (formData) => async (dispatch) => {
    try {

        const { data } = await api.wishlist_update(formData);
        dispatch({ type: action.WISHLIST, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const user_wishlist_list = (formData) => async (dispatch) => {
    try {

        const { data } = await api.user_wishlist_list(formData);
        dispatch({ type: action.GET_WISHLIST, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const add_to_cart_list = (formData) => async (dispatch) => {
    try {

        const { data } = await api.add_to_cart_list(formData);
        dispatch({ type: action.CART, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const product_filter = (formData) => async (dispatch) => {
    try {

        const { data } = await api.product_filter(formData);
        dispatch({ type: action.FILTERED, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const search_product = (formData) => async (dispatch) => {
    try {

        const { data } = await api.search_product(formData);
        dispatch({ type: action.SEARCH, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};