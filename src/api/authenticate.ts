import { Fields } from './../components/FormContainer/FormTypes';
import { AxiosInstance } from 'axios';
import { userState } from '../redux/userAuthReducer';
import { Auth } from '../components/FormAuth/formtype';

enum statusCode {
    Ok = 200,
    BadRequest = 400
}
export function authenticate(instance:AxiosInstance,value:string,data?:Fields | Auth):Promise<userState>  {
    switch(value){
        case "reg":
            return instance.post(`account/${value}`,data).then(response => {
                if(response.status === statusCode.Ok) {
                    return response.data;
                }
                else if(response.status === statusCode.BadRequest) {
                    return "Invalid data";
                }
                return "Something went Wrong";
            }).catch(error => console.log("Register Error",error));

        case "auth":
            return instance.get(`account/${value}`).then(response => {
                if(response.status === statusCode.Ok) {
                    return response.data.user
                }
                else if(response.status === statusCode.BadRequest) {
                    return "Invalid data"
                }
                return "Something went wrong";
            }).catch(error => "Something went" + error);

        case "token":
            return instance.post(`account/${value}`,data).then(response => {
                if(response.status === statusCode.Ok) {
                    return response.data;
                }
                else if(response.status === statusCode.BadRequest) {
                    return response.data;
                }
                return "Something went wrong";
            }).catch(error => error);
        default: return instance.post("account/value",{});
    }
}
