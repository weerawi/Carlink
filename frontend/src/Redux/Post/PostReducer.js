import { CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./PostActionType";
 
  
  const initialValue = {
    createPosts: [],
    userPost: null,
    likePost: null,
    unlikePost: null,
    deletePost: null,
    savePost: null,
    unsavePost: null,
    singlePost: null

  };
  
  export const PostReducer = (store = initialValue, { type, payload }) => {

    if (type === CREATE_NEW_POST) {
        return {...store, createPosts:payload}
    }else if(type === GET_USER_POST){
        return {...store, userPost:payload}
    }
    else if(type ===DELETE_POST){
        return {...store, deletePost:payload}
    }
    else if(type ===LIKE_POST){
        return {...store, likePost:payload}
    }
    else if(type ===UNLIKE_POST){
        return {...store, unlikePost:payload}
    }
    else if(type ===SAVE_POST){
        return {...store, savePost:payload}
    }
    else if(type ===UNSAVE_POST){
        return {...store, unsavePost:payload}
    }
    else if(type ===GET_SINGLE_POST){
        return {...store, singlePost:payload}
    } 
     
  };
  