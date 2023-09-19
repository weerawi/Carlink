import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./CommentActionType";

const BASE_URL = "http://localhost:8080/api/comments";

  
export const creatCommentAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/create/${data.postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt
      },
      body: JSON.stringify(data.data)
    });
    const comment = await res.json();
    console.log("created comment: ",comment)
    dispatch({ type: CREATE_COMMENT, payload:comment });
  } catch (error) {
    console.log("Error  :", error);
  }
};



// export const findPostCommentAction = (data) => async (dispatch) => {
//     try {
//       const res = await fetch(`${BASE_URL}/${data.postId}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + data.jwt
//         },
//         body: JSON.stringify(data.data)
//       });
//       const comment = await res.json();
//       console.log("find post comment: ",comment)
//       dispatch({ type: GET_POST_COMMENT, payload:comment });
//     } catch (error) {
//       console.log("Error  :", error);
//     }
//   };



  export const likeCommentAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/like/"${data.commentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const comment = await res.json();
      console.log("like comment: ",comment)
      dispatch({ type: LIKE_COMMENT, payload:comment });
    } catch (error) {
      console.log("Error  :", error);
    }
  };



  export const unlikeCommentAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/unlike/"${data.commentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt
        },
        body: JSON.stringify(data.data)
      });
      const comment = await res.json();
      console.log("unlike comment: ",comment)
      dispatch({ type: UNLIKE_COMMENT, payload:comment });
    } catch (error) {
      console.log("Error  :", error);
    }
  };