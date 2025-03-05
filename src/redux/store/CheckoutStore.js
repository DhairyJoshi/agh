import * as Action from '../apis/ActionType'

const initialState = {
    address: null,
    add_address: null,
    update_address: null,
    order: null

};

const CheckoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.ALL_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        case Action.ADD_ADDRESS:
            return {
                ...state,
                add_address: action.payload,
            };
        case Action.UPDATE_ADDRESS:
            return {
                ...state,
                update_address: action.payload,
            };
        case Action.DELETE_ADDRESS:
            return {
                ...state,
                deleted: action.payload,
            };
        case Action.ORDER_CONFIRM:
            return {
                ...state,
                order: action.payload,
            };
        case Action.PROMO_LIST:
            return {
                ...state,
                promocodes: action.payload,
            };
        case Action.ORDERS:
            return {
                ...state,
                order_history: action.payload,
            };
        case Action.SHIPPING:
            return {
                ...state,
                shipping: action.payload,
            };

        default:
            return state;
    }
};

export default CheckoutReducer;
