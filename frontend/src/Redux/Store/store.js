import thunk from "redux-thunk";
import { AuthReducer } from "../Auth/Reducer"; 
import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import { UserReducer } from "../User/UserReducer";

const rootReducer= combineReducers({
    auth:AuthReducer,
    user:UserReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));