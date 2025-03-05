import * as Action from '../apis/ActionType'

const initialState = {
    otpSend: null,
    otpVerify: null,
    profile: null,
    socialLogin: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.OTP_SEND:
            return {
                ...state,
                otpSend: action.payload,
            };
        case Action.OTP_VERIFY:
            return {
                ...state,
                otpVerify: action.payload,
            };
        case Action.PROFILE_UPDATED:
            return {
                ...state,
                profile: action.payload,
            };
        case Action.SOCIAL_LOGIN:
            return {
                ...state,
                socialLogin: action.payload,
            };
        case Action.CONTACT_US:
            return {
                ...state,
                contact: action.payload,
            };



        default:
            return state;
    }
};

export default AuthReducer;
