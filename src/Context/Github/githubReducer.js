import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    SET_LOADING
} from '../../TYPES'

function githubReducer(state, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case SEARCH_USERS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            };
        case GET_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };
        default:
            throw new Error();
    }
}

export default githubReducer
