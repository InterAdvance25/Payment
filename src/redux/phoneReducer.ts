const UPDATE_TEXT = "UPDATE_TEXT"; 
const UPDATE_COUNT = "UPDATE_COUNT" 

export type PhoneState = {
        phoneNumber?:string,
        count:number
}

let defaultState:PhoneState = {
        phoneNumber:"",
        count:0
}

export interface IChangePhone {
        onChangeHandler:(value:string,name:string) => void,
        onSend:() => void
}
export interface IDataPhone {
        phone?:string,
        count:number
}

export type PhonePropsType = IDataPhone & IChangePhone;

const phoneReducer = (state:PhoneState = defaultState,action:Action):PhoneState =>  {
        switch(action.type) {
                case UPDATE_TEXT: return {
                  ...state,phoneNumber:action.payload.text
                } 
                case UPDATE_COUNT: return {
                        ...state,count:action.payload.count
                }
                default: 
                    return state;
         }       
   
}

export type ActionUpdateText = {
        type:typeof UPDATE_TEXT,
        payload: {
           text?:string
        }
}
export type ActionUpdateCount = {
        type:typeof UPDATE_COUNT,
        payload: {
           count:number
        }
}

type Action = ActionUpdateCount | ActionUpdateText


export const UpdateNumberActionCreator = (text:string):Action => ({type:UPDATE_TEXT, payload:{ text } });
export const UpdateCountActionCreator = (count:number):Action => ({type:UPDATE_COUNT,payload:{ count }});

export default phoneReducer;


