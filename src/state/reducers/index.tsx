import { combineReducers } from "redux";
import bankReducer from "./bankReducer";


const reducers = combineReducers({
    bank: bankReducer
})

export default reducers


//ReturnType is a build-it type within TypeScript
// what ever reducers types is, it will assign it to type State
export type State = ReturnType<typeof reducers>