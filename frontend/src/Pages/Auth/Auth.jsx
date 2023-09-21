import React, { useState } from 'react'
import "./Auth.css" 
import Singin from '../../Components/Register/Signin'
import { Signup } from '../../Components/Register/Signup'
import { useLocation } from 'react-router-dom' 
import fb from '../../images/fb.png'; 
import { ToastContainer, toast } from 'react-toastify';


const Auth = () => { 
  // for changing the pathname signin or singup in this component
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);


  const changeLogin = () => {
    setIsLogin(prevIsLogin => !prevIsLogin);
  }

   

  return (
    

    <div className='text-sm bg-gray-200 flex h-[100vh]   justify-center items-center'>
        <ToastContainer />
        <div className='flex flex-col  md:flex-row space-x-3 '>

            <div className=' hidden  lg:block my-auto   '>
                <div className='h-[39rem] w-[23rem] relative '> 
              
                  <img   className='w-auto h-full ' src='/login.png'></img> 
                  <div className='mobileWallpaper h-[37.5rem] w-[17.6rem] absolute top-3 left-4'></div>

                </div> 
            </div>

            <div className=' my-auto '>  
                <div className='  border bg-white border-gray-600 p-2  '> 
                    <div className='bg-white flex flex-col justify-center items-center mt-3'> 
                        <div>
                          <img className="w-[120px] md:w-[150px] lg:w-[200px] mt-25" src='/pngwing.com.png' alt="Instagram Logo" />  
                        </div>
                         
                        <div className='space-x-2'>CARLINK</div>
                    </div>
                    <div className='my-2 flex  justify-center items-center'>
                        
                        <div className='text-sm  w-[50vw] lg:w-[20vw] md:w-[30vw]'>
                          {location.pathname==="/login" ? <Singin/> : <Signup/>} 
                        </div>
                            
                    </div>

                                                
                    <div className="flex relative justify-center my-7"> 
                        <div className="w-full  mt-2  border-t border-gray-300"></div>
                        <div className="font-bold  text-gray-600 px-5">OR</div>
                        <div className="w-full  mt-2  border-t border-gray-300"></div>  
                    </div>


                    <div className='flex justify-center'>
                      <img src={fb} width= "20px"  alt="Facebook" className="mr-2" />Log in with Facebook
                            
                    </div>

                    <div className="text-blue-700 text-xs md:text-sm mt-3 mb-7 text-center">
                        Forgot password?
                    </div>
      
                </div> 

                 
            </div>
        </div>
        
    </div>


        
     
  )
}

export default Auth