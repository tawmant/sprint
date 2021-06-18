const initialState = {
    news: [],
    loading: true,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEWS_LOADED':
            return {
                ...state,
                news: action.payload,
                loading: false,
                error: false
            };
        case 'NEWS_REQUESTED':
            return {
                ...state,
                news: state.news,
                loading: true
            };
        case 'NEWS_ERROR':
            return {
                ...state,
                news: state.news,
                error: true
            };
        default: 
            return state;
    }
}

export default reducer;