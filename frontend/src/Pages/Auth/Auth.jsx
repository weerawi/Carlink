import React, { useState } from 'react'
import "./Auth.css" 
import Singin from '../../Components/Register/Signin'
import { Signup } from '../../Components/Register/Signup'
import { useLocation } from 'react-router-dom'
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

const Auth = () => {


  // for changing the pathname signin or singup in this component
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);


  const changeLogin = () => {
    setIsLogin(prevIsLogin => !prevIsLogin);
}


  return (
    

    <div className='text-sm flex h-[100vh] my-20 justify-center items-center'>
        <div className='flex flex-col  md:flex-row space-x-3 '>

            <div className=' hidden  lg:block my-auto   '>
                <div className='h-[39rem] w-[23rem] relative '> 
              
                  <img   className='w-auto h-full ' src='/login.png'></img> 
                  <div className='mobileWallpaper h-[37.5rem] w-[17.6rem] absolute top-3 left-4'></div>

                </div> 
            </div>

            <div className='  '>  
                <div className='  border bg-white border-gray-600 p-2  '> 
                    <div className='bg-white flex justify-center mt-3'> 
                        <img className="w-[170px] md:w-[300px] mt-25" src={insta_logo} alt="Instagram Logo" />   
                    </div>
                    <div className='my-2 flex justify-center items-center'>
                        
                        <div className='  w-[50vw] lg:w-[23vw]'>
                          {location.pathname==="/login" ? <Singin/> : <Signup/>} 
                        </div>
                            
                    </div>

                                                
                    <div className="flex justify-center my-5"> 
                        <div className="w-full   border-t border-gray-300"></div>
                        <div className="font-bold text-gray-600 mx-10">OR</div>
                        <div className="w-full   border-t border-gray-300"></div>  
                    </div>


                    <div className='flex justify-center'>
                      <img src={fb} width= "20px"  alt="Facebook" className="mr-2" />Log in with Facebook
                            
                    </div>

                    <div className="text-blue-700 text-xs md:text-sm mt-3 mb-7 text-center">
                        Forgot password?
                    </div>
      
                </div> 

                

                <div className=" border border-gray-600 px-10  text-center mt-6 py-4">
                    Get the app.
                    <div className="mt-2 flex justify-between ">
                        <img src={appstore} alt="App Store" className="mr-1" width="136" />
                        <img src={playstore} alt="Play Store" className="mr-1" width="136" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>


        
     
  )
}

export default Auth