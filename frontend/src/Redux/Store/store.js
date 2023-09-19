import thunk from "redux-thunk";
import { AuthReducer } from "../Auth/Reducer"; 
import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import { UserReducer } from "../User/UserReducer";
import { PostReducer } from "../Post/PostReducer";
import { commentReducer } from "../Comment/CommentReduce";

const rootReducer= combineReducers({
    auth:AuthReducer,
    user:UserReducer,
    post:PostReducer ,
    comment:commentReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));