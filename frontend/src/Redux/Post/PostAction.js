import { CREATE_NEW_POST,DELETE_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, REQ_USER_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./PostActionType";
 
  
  const BASE_URL = "http://localhost:8080/api/post";
  
  export const createPostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const post = await res.json();
  
      dispatch({ type: CREATE_NEW_POST, payload:post });
    } catch (error) {
      console.log("Error  :", error);
    }
  };
  
  export const findUserPostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/following/${data.userIds}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const posts = await res.json();
      console.log("find post by user ids: ",posts)
  
      dispatch({ type: GET_USER_POST, payload:posts });
    } catch (error) {
      console.log("Error :", error);
    }
  };


  export const requestUserPostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/following/${data.userIds}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const posts = await res.json();
      console.log("req user post: ",posts)
  
      dispatch({ type: REQ_USER_POST, payload:posts });
    } catch (error) {
      console.log("Error  :", error);
    }
  };



  export const likePostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/like/${data.postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const post = await res.json();
      console.log("LIKE post: ",post)
  
      dispatch({ type: LIKE_POST, payload:post });
    } catch (error) {
      console.log("Error  :", error);
    }
  };



  export const unlikePostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/unlike/${data.postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const post = await res.json();
      console.log("unlike post: ",post)
  
      dispatch({ type: UNLIKE_POST, payload:post });
    } catch (error) {
      console.log("Error  :", error);
    }
  };


  export const svePostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/save_post/${data.postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const post = await res.json();
      console.log("save post: ",post)
  
      dispatch({ type: SAVE_POST, payload:post });
    } catch (error) {
      console.log("Error  :", error);
    }
  };


  export const unSavePostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/unsave_post/${data.postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const post = await res.json();
      console.log("unsave post: ",post)
  
      dispatch({ type: UNSAVE_POST, payload:post });
    } catch (error) {
      console.log("Error  :", error);
    }
  };



  export const findPostByIdAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/${data.postId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const post = await res.json();
      console.log("get single post: ",post)
  
      dispatch({ type: GET_SINGLE_POST, payload:post });
    } catch (error) {
      console.log("Error  :", error);
    }
  };


  export const deletePostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/${data.postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const post = await res.json();
      console.log("delete post: ",post)
  
      dispatch({ type: DELETE_POST, payload:post });
    } catch (error) {
      console.log("Error  :", error);
    }
  };