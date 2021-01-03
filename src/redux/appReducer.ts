
const LOADED = "APP/LOADED";

type finishLoading = {
    type:typeof LOADED
    loaded:boolean
}
type loadingAction = finishLoading;

type loadingState = {loaded:boolean}
const appReducer = (state:loadingState = {loaded:false} ,action:loadingAction) => {
    switch(action.type) {
        case LOADED:
            return {
                ...state,loaded:true
            }
        default:
            return state;
    }
}
export const AppLoaded = ():loadingAction => ({type:LOADED,loaded:true});

export default appReducer;