import { GALLERY, GALLERY_ERR } from './ActionTypes';
import * as api from '../api/index';

export const GET_GALLERY = () => async (dispatch) => {
    try {
        const { data } = await api.agh_gallery_list_web();
        dispatch({ type: GALLERY, payload: data });
        return data;
    } catch (error) {
        console.error("Error fetching gallery:", error);
        dispatch({ type: GALLERY_ERR, payload: error });
    }
};