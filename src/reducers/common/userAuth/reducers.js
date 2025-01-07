import { actions } from './actions'

const initialState = {
    userInfo: [],
    authToken: undefined
}

const userAuthDetails = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_AUTH_INFO:
            return {
                ...state,
                userInfo: [action.payload.userInfo],
                authToken: action.payload.authToken
            }
        default:
            return state;
    }
}

export default userAuthDetails