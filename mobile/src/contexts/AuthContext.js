import {createContext} from "react";

const KEY_USER = '@App_User';
const KEY_TOKEN = '@APP_UserToken';

export const AuthContext = createContext({});

const initialState = {
    user: null,
    userToKen: null,
    isSignedIn: false,
    isLoading: true,
}

function AuthReducer(state, action){
    switch(action.type){
        case 'SIGN_IN':
            return {...state, user: action.user, userToKen: action.token, isSignedIn: true, isLoading: false};

        case 'SIGN_OUT':
            return {...state, user: null, userToKen: null, isSignedIn: false, isLoading: false};

        case 'LOAD_DATA':
            return {...state, user: action.user, userToKen: action.token, isSignedIn: !!action.token, isLoading: false};
        default:
            return state
    }
}