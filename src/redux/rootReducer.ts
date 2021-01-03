import { combineReducers} from "redux";
import appReducer from "./appReducer";
import cardReducer from "./cardReducer";
import phoneReducer from "./phoneReducer";
import userAuthReducer from "./userAuthReducer";
import usersReducer from "./usersReducer";


export let rootReducer = combineReducers({
    user:userAuthReducer,
    users:usersReducer,
    phone:phoneReducer,
    card:cardReducer,
    app:appReducer
});
export type AppState = ReturnType<typeof rootReducer>;