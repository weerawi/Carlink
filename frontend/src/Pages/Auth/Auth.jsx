import React from 'react'
import "./Auth.css" 
import Singin from '../../Components/Register/Signin'
import { Signup } from '../../Components/Register/Signup'
import { useLocation } from 'react-router-dom'

const Auth = () => {


  // for changing the pathname signin or singup in this component
  const location = useLocation();

  return (
     
    <div className='flex items-center justify-center h-[100vh]'>
        <div className=' hidden  lg:block'>
            <div className='h-[35rem] w-[23rem] relative '> 
            
              <img   className='w-auto h-full ' src='/login.png'></img> 
              <div className='mobileWallpaper h-[32.3rem] w-[15.5rem] absolute top-6 left-4'></div>

            </div> 
        </div> 

        <div className='  w-[40vw] lg:w-[23vw]'>
          {location.pathname==="/login" ? <Singin/> : <Signup/>} 
        </div>
    </div> 
        
     
  )
}

export default Auth