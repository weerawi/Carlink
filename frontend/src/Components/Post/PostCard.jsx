import React, { useState } from 'react'
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from 'react-icons/bs'
import "./PostCard.css"
import {  AiFillHeart,  AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModal from '../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';

const PostCard = () => {

    const[showDropdown,setShowDropdown] = useState(false);
    const[isPostLiked, setIsPostLiked] = useState(false);
    const[isSaved, setIsSaved] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure(); 

    const handleSave=()=>{
        setIsSaved(!isSaved);
    }
 
    const handlePostLike=()=>{
        setIsPostLiked(!isPostLiked);
    }
    const handleClick=()=>{
        setShowDropdown(!showDropdown) ;
    }

    const handleOpenCommentModal =() => {
      onOpen();
    }

  return (
    <div>
      <div className='border rounded-md w-full shadow-md'>

{/*////////////// username delete etc bar */}

        <div className='flex justify-between items-center w-full py-4 px-5 '>


          <div className='flex items-center '>
             <img className='h-12 w-12 rounded-full' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' alt='' />
             <div>
                <p className='font-semibold text-sm'>username</p>
                <p className='font-thin text-sm'>location</p>
             </div>
          </div> 

          <div className='cursor-pointer dropdown '>
            <BsThreeDots className='dots' onClick={handleClick}/>

            <div onClick={handleClick} className='dropdown-content'>
               {showDropdown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
            </div>
          </div>


        </div> 

{/* ///////////////post image bar */}

        <div className='w-full'>
            <img className='w-full' src='https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_640.jpg' alt='dogstory' />
        </div>


{/* ///////////////////  heart comment save bar */}
        <div className='py-5 flex justify-between items-center w-full '>
            <div className='flex space-x-2 px-2' >
               {isPostLiked ? <AiFillHeart  className='text-xl cursor-pointer text-red-700' onClick={handlePostLike}/>: <AiOutlineHeart  className='text-xl cursor-pointer' onClick={handlePostLike}/>}
               <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
               <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'  />
            
            </div>

            <div className='cursor-pointer px-2'>
                {isSaved? <BsBookmarkFill onClick={handleSave}/> : <BsBookmark  onClick={handleSave}/>}
            </div>


        </div>


{/*/////////////////// like and comment showinf bar */}
        <div  className='w-full py-2 px-5'>
            <p>10 likes</p>
            <p className='opacity-50 py-2 cursor-pointer'> View all 10 comments</p>
        </div>


        <div className='border border-t w-full'>
            <div className='flex w-full items-center px-5'>
                <BsEmojiSmile/>
                <input className='comment-input' type='text' placeholder='Add a comment...' />
            </div>
        </div>

      </div>

{/* //////////////// comment modal */}

      <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSave={handleSave} isPostLiked={isPostLiked} isSaved={isSaved}/>

    </div>
  )
}

export default PostCard