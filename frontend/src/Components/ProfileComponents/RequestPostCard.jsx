import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from "react-icons/fa"

const RequestPostCard = () => {
  return (
    <div className='p-2'>
        <div className='overflow-hidden relative w-60 h-60 hover:opacity-70'>
            <img className='cursor-pointer inline-block w-[100%] h-[100%]' src="https://images.pexels.com/photos/6379842/pexels-photo-6379842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <div>
                <div className='overlay hover:z-10'>
                    <div className='absolute  bg-red-500 flex justify-between'>
                        <AiFillHeart></AiFillHeart> <span> 10</span>
                    </div>
                    <div><FaComment/> <span> 30</span></div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default RequestPostCard