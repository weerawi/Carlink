import { FOLLOW_USER, GET_USERS_BY_USER_IDS, GET_USER_BY_USERNAME, REQ_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./UserActionType";
const BASE_URL = "http://localhost:8080/api/profile";

export const getUserProfileAction= (jwt) => async(dispatch)=>{
    
    try{
        const res = await fetch("http://localhost:8080/api/profile/request" ,{
            method:"GET", 
            headers:{
                'Content-Type':'application/json',
                Authorization:"Bearer"+jwt
            },  
        }  )
        const reqUser=await res.json(); 

        dispatch({type:REQ_USER,payload:reqUser});  

    }catch(error){
        console.log("catch :",error);
    }
 }


export const findUserByUserNameAction =(data) =>async(dispatch)=>{
    const res = await fetch(`${BASE_URL}/username/${data.username}`,{
        method:"GET", 
        headers:{
            'Content-Type':'application/json',
            Authorization:"Bearer"+data.jwt
        },  
    });

    const user = await res.json();
    console.log("find by username :",user);
    dispatch({type:GET_USER_BY_USERNAME,payload:user})

}



export const findUsersByUserIdsAction =(data) =>async(dispatch)=>{
    const res = await fetch(`${BASE_URL}/m/${data.ids}`,{
        method:"GET", 
        headers:{
            'Content-Type':'application/json',
            Authorization:"Bearer"+data.jwt
        },  
    });

    const users = await res.json();
    console.log("find by ID :",users);
    dispatch({type:GET_USERS_BY_USER_IDS,payload:users})

}

 
export const followUserAction =(data) =>async(dispatch)=>{
    const res = await fetch(`${BASE_URL}/follow/${data.id}`,{
        method:"PUT", 
        headers:{
            'Content-Type':'application/json',
            Authorization:"Bearer"+data.jwt
        },  
    });

    const user = await res.json();
    console.log("follow user:",user);
    dispatch({type:FOLLOW_USER,payload:user})

}


export const unfollowUserAction =(data) =>async(dispatch)=>{
    const res = await fetch(`${BASE_URL}/unfollow/${data.id}`,{
        method:"PUT", 
        headers:{
            'Content-Type':'application/json',
            Authorization:"Bearer"+data.jwt
        },  
    });

    const user = await res.json();
    console.log("unfollow user:",user);
    dispatch({type:UNFOLLOW_USER,payload:user})

}

export const searchUserAction =(data) =>async(dispatch)=>{
     
    try {

        const res = await fetch(`${BASE_URL}/search?q=${data.query}`,{
            method:"GET", 
            headers:{
                'Content-Type':'application/json',
                Authorization:"Bearer"+data.jwt
            },  
        });
    
        const user = await res.json();
        console.log("edit user:",user);
        dispatch({type:SEARCH_USER,payload:user})
        
    } catch (error) {
        console.log("catch error",error);
    }

}


export const updateUserAction =(data) =>async(dispatch)=>{
    
    try {

        const res = await fetch(`${BASE_URL}/account/edit`,{
            method:"PUT", 
            headers:{
                'Content-Type':'application/json',
                Authorization:"Bearer"+data.jwt
            },  
            body:JSON.stringify(data.data)
        });
    
        const user = await res.json();
        console.log("edit user:",user);
        dispatch({type:UPDATE_USER,payload:user})
        
    } catch (error) {
        console.log("catch error",error);
    }

} 