import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./CommentActionType";


const initialValue = {
    createPosts: [],
    postComment: null,
    likecomment: null,
    unlikeComment: null
    
}


export const commentReducer = (store = initialValue, { type, payload }) => {

    if (type === CREATE_COMMENT) {
        return {...store, createPosts:payload}
    }else if(type === GET_POST_COMMENT){
        return {...store,postComment:payload}
    } 
    else if(type ===LIKE_COMMENT){
        return {...store, likecomment:payload}
    }
    else if(type ===UNLIKE_COMMENT){
        return {...store, unlikeComment:payload}
    } 
    return store;
  };