import { SIGN_IN, SIGN_UP } from "./ActionType";

import {   toast } from 'react-toastify';

export const signinAction=(data)=> async(dispatch) => {
    try{
        const res = await fetch("http://localhost:8080/signin" ,{
            method:"GET", 
            headers:{
                'Content-Type':'application/json',
                Authorization:"Basic"+btoa(data.email + ":" + data.password),
            },  
        }  )
        const token=res.headers.get("Authorization");
        localStorage.setItem("token",token);

        dispatch({type:SIGN_IN,payload:token}); 
        console.log("Signin token: ",token);

    }catch(error){
        console.log(error);
    }

}
 
export const signupAction = (data) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data) 
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const user = await res.json();
        dispatch({ type: SIGN_UP, payload: user });
    } catch (error) {
        console.error("Error signing up:", error);
        // Handle the error here (e.g., show an error toast)
         
    }
}
