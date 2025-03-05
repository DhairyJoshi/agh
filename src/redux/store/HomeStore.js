import * as Action from '../apis/ActionType'

const initialState = {
    advertisement: null,
    dealOfDay: null
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.ADVERTISEMENT_BANNER:
            return {
                ...state,
                advertisement: action.payload,
            };
        case Action.DEAL_OF_DAY:
            return {
                ...state,
                dealOfDay: action.payload,
            };
        case Action.OFFERS:
            return {
                ...state,
                offers: action.payload,
            };
        case Action.VISITOR:
            return {
                ...state,
                visitor: action.payload,
            };
        case Action.NOTIFICATION:
            return {
                ...state,
                notification: action.payload,
            };


        default:
            return state;
    }
};

export default HomeReducer;
