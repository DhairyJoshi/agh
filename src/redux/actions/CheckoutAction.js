import axios from "axios";
import * as api from "../apis/Api";
import * as action from "../apis/ActionType";

export const user_address_list = (formData) => async (dispatch) => {
    try {
        const { data } = await api.user_address_list(formData);
        dispatch({ type: action.ALL_ADDRESS, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const address_create = (formData) => async (dispatch) => {
    try {
        const { data } = await api.address_create(formData);
        dispatch({ type: action.ADD_ADDRESS, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const address_update = (formData) => async (dispatch) => {
    try {
        const { data } = await api.address_update(formData);
        dispatch({ type: action.UPDATE_ADDRESS, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const address_delete = (formData) => async (dispatch) => {
    try {
        const { data } = await api.address_delete(formData);
        dispatch({ type: action.DELETE_ADDRESS, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};

export const createOrder = (formData) => async (dispatch) => {
    try {
        const { data } = await api.order_confirm(formData);
        dispatch({ type: action.ORDER_CONFIRM, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const all_promocode_list = (formData) => async (dispatch) => {
    try {
        const { data } = await api.all_promocode_list(formData);
        dispatch({ type: action.PROMO_LIST, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const my_order_list = (formData) => async (dispatch) => {
    try {
        const { data } = await api.my_order_list(formData);
        dispatch({ type: action.ORDERS, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const get_shipping_price = (formData) => async (dispatch) => {
    try {
        const { data } = await api.get_shipping_price(formData);
        dispatch({ type: action.SHIPPING, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};