import thunk from "redux-thunk";
import { AuthReducer } from "../Auth/Reducer"; 
import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import { UserReducer } from "../User/UserReducer";
import { PostReducer } from "../Post/PostReducer";

const rootReducer= combineReducers({
    auth:AuthReducer,
    user:UserReducer,
    post:PostReducer 
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));