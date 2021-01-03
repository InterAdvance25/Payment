import { AppLoaded } from './appReducer';
import { api } from '../api/api';
import { Fields } from '../components/FormContainer/FormTypes';
import { AppState } from './rootReducer';
import { ThunkAction } from 'redux-thunk';
import { Auth } from '../components/FormAuth/formtype';


const AUTHORIZED = "APP/AUTHORIZED";
const UNAUTHORIZED = "APP/UNATHORIZED";

export type userState = {
    login:string
    name:string,
    lastname:string,
    count:number,
    code:number,
    isAuthorized?:boolean,
    access_token?:string
}

type userActionAuthorized = {
    type:typeof AUTHORIZED,
    payload:userState
}

type userActionUnauthorized = {
    type:typeof UNAUTHORIZED,
    payload?:userState
}
export type authorizeAction = userActionAuthorized | userActionUnauthorized;

const defaultState:userState =  {
    login:'',
    name:'',
    lastname:'',
    count:0,
    code:0,
    isAuthorized:false
}

const userAuthReducer= (state:userState = defaultState, action:authorizeAction) : userState => {
        switch (action.type) {
             case AUTHORIZED:
                 return {
                    ...state,
                    login:action.payload.login,
                    name:action.payload.name,
                    lastname:action.payload.lastname,
                    count:action.payload.count,
                    code:action.payload.code,
                    isAuthorized:action.payload.isAuthorized ?? state.isAuthorized
                 }
            case UNAUTHORIZED: 
                 return {
                    ...state,
                    login:'',
                    name:'',
                    lastname:'',
                    count:0,
                    code:0,
                    isAuthorized:false,                    
                 }
            default:
                return state;
        }
}

const authAction = (user:userState):authorizeAction => ({type:AUTHORIZED, payload:user});
export const signOutAction = ():authorizeAction => ({type:UNAUTHORIZED});

export const registerThunk = (data:Fields):ThunkAction<Promise<void>,AppState,unknown,authorizeAction> => async (dispatch) => {
        let response:userState = await api.register(data);
        dispatch(authAction(setUser(response)));
}
export const authThunk = (data:Auth):ThunkAction<Promise<void>,AppState,unknown,authorizeAction> => async (dispatch) => {
        let response:userState = await api.authorize(data);
        dispatch(authAction(setUser(response)));
}
export const initUser = ():ThunkAction<Promise<void>,AppState,unknown,authorizeAction | any> => async (dispatch) => {
        let response:userState | string = await api.init();
        let result:userState | string = typeof response === "string" ? defaultState : setUser(response);
        await dispatch(authAction(result));
        await dispatch(AppLoaded());
  
}
const setUser = (response:userState):userState => {
        if(response.access_token) sessionStorage.setItem("token",response.access_token ?? "");
    
        return {
                    login:response.login,
                    name:response.name,
                    lastname:response.lastname,
                    count:response.count,
                    code:response.code,
                    isAuthorized:response.isAuthorized 
        }
}
export default userAuthReducer;
