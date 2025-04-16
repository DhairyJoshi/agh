const initialState = {
    gallery: [],
    error: null,
};

const GalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GALLERY':
            return {
                ...state,
                gallery: action.payload.data,
            };
        case 'GALLERY_ERR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default GalleryReducer;