import axios from "axios";
import * as api from "../apis/Api";
import * as action from "../apis/ActionType";

export const sendOTPforLogin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.web_otp_send(formData);
        dispatch({ type: action.OTP_SEND, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const verifyOtpforLogin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.web_otp_verify(formData);
        dispatch({ type: action.OTP_VERIFY, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const profileComplete = (formData) => async (dispatch) => {
    try {
        const { data } = await api.user_details_update(formData);
        dispatch({ type: action.PROFILE_UPDATED, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const SocialLogin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.social_login(formData);
        dispatch({ type: action.SOCIAL_LOGIN, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
export const submitEnquiry = (formData) => async (dispatch) => {
    try {
        const { data } = await api.contact_us(formData);
        dispatch({ type: action.CONTACT_US, payload: data });
        return data

    } catch (error) {
        console.log(error);
    }
};
