import { TEAM, TEAM_ERR } from './ActionTypes';
import * as api from '../api/index';

export const GET_TEAM = () => async (dispatch) => {
    try {
        const { data } = await api.agh_our_team_list_web();
        dispatch({ type: TEAM, payload: data });
        return data;
    } catch (error) {
        console.error("Error fetching team:", error);
        dispatch({ type: TEAM_ERR, payload: error });
    }
};