const UPDATE_CARD_NUMBER = "UPDATE_CARD_NUMBER"; 
const UPDATE_COUNT_CARD = "UPDATE_COUNT_CARD" 

export type cardState = {
    card:number,
    count:number
}
let defaultState:cardState = {
    card:0,
    count:0
}

export interface IChangeCard {
    onChangeHandler:(value:number,name:string) => void,
}

export interface ICard {
    card:number,
    count:number
}
export type cardPropsType = IChangeCard & ICard;
const cardReducer = (state:cardState = defaultState,action:Action):cardState =>  {
    
       switch(action.type) {
           case UPDATE_CARD_NUMBER: return {
               ...state,card:action.payload.card
           }
           case UPDATE_COUNT_CARD: return {
               ...state,count:action.payload.count
           }
           default: 
                return state;
       }
}

export type ActionUpdateCard = {
    type:typeof UPDATE_CARD_NUMBER,
    payload: {
       card:number
    }
}
export type ActionUpdateCount = {
    type:typeof UPDATE_COUNT_CARD,
    payload: {
       count:number
    }
}

export type Action = ActionUpdateCount | ActionUpdateCard


export const UpdateCardActionCreator = (value:number):Action => ({type:UPDATE_CARD_NUMBER, payload:{ card:value } });
export const UpdateCountActionCreator = (count:number):Action => ({type:UPDATE_COUNT_CARD,payload:{ count }});
export default cardReducer