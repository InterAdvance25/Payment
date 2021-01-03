import { connect } from 'react-redux'
import { Action } from 'redux'
import { UpdateNumberActionCreator,IChangePhone, IDataPhone, UpdateCountActionCreator} from '../../../redux/phoneReducer'
import { AppState } from '../../../redux/rootReducer'
import Phone from './Phone'

const mapStateToProps = (state:AppState,ownProps:any = {}):IDataPhone => {
    return {
        phone:state.phone.phoneNumber,
        count:state.phone.count
    }
}


const mapDispatchToProps = (dipsatch:(command:Action) => void):IChangePhone =>  {
    return {
        onChangeHandler(value:string,name:string) {
            if(name === "phone") dipsatch(UpdateNumberActionCreator(value));
            if(name === "count") dipsatch(UpdateCountActionCreator(+value));
        },
        onSend() {
            dipsatch(UpdateNumberActionCreator(""));
            dipsatch(UpdateCountActionCreator(0));
        }
    }
}

export default connect<IDataPhone,IChangePhone,{},AppState>(mapStateToProps, mapDispatchToProps)(Phone);
