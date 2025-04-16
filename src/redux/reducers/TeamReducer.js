const initialState = {
    team: [],
    error: null,
};

const TeamReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEAM':
            return {
                ...state,
                team: action.payload.data,
            };
        case 'TEAM_ERR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default TeamReducer;