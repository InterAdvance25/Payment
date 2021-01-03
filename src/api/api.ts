import { users } from './../redux/usersReducer';
import { userState } from '../redux/userAuthReducer';
import { Fields } from './../components/FormContainer/FormTypes';
import Axios, { AxiosInstance } from 'axios';
import { authenticate } from './authenticate';
import { Auth } from '../components/FormAuth/formtype';




interface Api {
    register:(value:Fields) => Promise<userState>;
    init:() => Promise<userState>;
    authorize:(value:Auth) => Promise<userState>;
    getUsers:(param:string) => Promise<Array<users>>;
}


const token:string | null  = sessionStorage.getItem("token");

const instance:AxiosInstance = Axios.create({
    baseURL:"https://localhost:44381/api/",
    withCredentials:true,
    headers: {"Authorization": `Bearer ${token}`} // token from session 
})
export const api:Api = {
    register(data:Fields):Promise<userState> {
        return authenticate(instance,"reg",data)
    },
    authorize(data:Auth):Promise<userState> {
        return authenticate(instance,"token",data);
    },
    init():Promise<userState>{
        return authenticate(instance,"auth");
    },
    getUsers(param:string):Promise<Array<users>>{
        return instance.get(`Bank/${param}`).then(response => response.data);
    }
}


export function Transfer(dispatch:any,user:any,value:string,setTransfer:any,userId?:number,info?:number) {

    instance.post(`Bank/${+value}/${userId ?? 9} ${ info ? `/${info}` : ""  }`).then(() => {
        dispatch({type:"APP/AUTHORIZED",payload:{
            login:user.login,
            name:user.name,
            lastname:user.lastname,
            code:user.code,
            count:user.count - +value
        }});
    });
    setTransfer(true);
}



