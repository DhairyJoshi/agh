import axios from "axios";
import * as api from "../apis/Api";
import * as action from "../apis/ActionType";

export const getAdvertiseBanner = (formData) => async (dispatch) => {
    try {
        const { data } = await api.all_advertisement_list(formData);
        dispatch({ type: action.ADVERTISEMENT_BANNER, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const getDealOfDay = (formData) => async (dispatch) => {
    try {
        const { data } = await api.all_deal_of_the_day_list(formData);
        dispatch({ type: action.DEAL_OF_DAY, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const all_offers_list = (formData) => async (dispatch) => {
    try {
        const { data } = await api.all_offers_list(formData);
        dispatch({ type: action.OFFERS, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const count_visitors = (formData) => async (dispatch) => {
    try {
        const { data } = await api.count_visitors(formData);
        dispatch({ type: action.VISITOR, payload: data });

    } catch (error) {
        console.log(error);
    }
};
export const get_notifications = (formData) => async (dispatch) => {
    try {
        const { data } = await api.get_notifications(formData);
        dispatch({ type: action.NOTIFICATION, payload: data });
        return data
    } catch (error) {
        console.log(error);
    }
};