import { ThunkAction } from 'redux-thunk';
import { AppState } from './rootReducer';
import { api } from '../api/api';

const USERSLOADING = "APP/USERSLOADING";

export type users = {
    id:number
    name:string,
    lastName:string,
    code:number
}
export type userListState = {
    users:Array<users>,
    loaded:boolean
}
export type seacrhingUserAction = {
    type:typeof USERSLOADING,
    payload:{
        users:Array<users>,
        loaded:boolean
    }
}
const defaultState:userListState = { users:[],loaded:false}

const usersReducer = (state:userListState = defaultState,action:seacrhingUserAction) => {
        switch(action.type) {
            case USERSLOADING:
                return {
                    ...state,
                    users:[...action.payload.users],
                    loaded:action.payload.loaded
                }
            default:
                return state;
        }
}

const loadUserAction = (data:Array<users>):seacrhingUserAction => ({type:USERSLOADING,payload:{
    users:data,
    loaded:true
}});
export const loadUserThunk = (param:string):ThunkAction<Promise<void>,AppState,unknown,seacrhingUserAction | any> => async (dispatch) => {
        const users:Array<users> = await api.getUsers(param);

        dispatch(loadUserAction(users));
}







export default usersReducer
