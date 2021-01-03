import { Dispatch } from "react";
import { connect } from "react-redux";
import { Action, ICard, IChangeCard, UpdateCardActionCreator,UpdateCountActionCreator } from "../../../redux/cardReducer";
import { AppState } from "../../../redux/rootReducer";
import BankCard from "./BankCard";



let mapStateToProps = (state:AppState,ownProps:any = {}):ICard => {
    return {
        card:state.card.card,
        count:state.card.count
    }
}

let mapDispatchToProps = (dispatch:Dispatch<Action>):IChangeCard => {

        return {
            onChangeHandler(value:number,name:string) {
                if(name === "card") dispatch(UpdateCardActionCreator(value));
                if(name === "count") dispatch(UpdateCountActionCreator(value));
            }
        }
}

export default connect<ICard,IChangeCard,{},AppState>(mapStateToProps,mapDispatchToProps)(BankCard);