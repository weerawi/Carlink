import React from 'react'
import { Modal, ModalBody, ModalOverlay, ModalContent  } from '@chakra-ui/react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./CommentModal.css";

const CommentModal = ({onClose,isOpen,isSaved,isPostLiked,handleSave,handlePostLike}) => {
  return (
    <div> 
        <Modal  size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent> 

          <ModalBody> 
            <div className='flex h-[75vh]  '>
                <div className='w-[45%] flex flex-col justify-center'>
                  <img className=' max-h-full w-full' src='https://cdn.pixabay.com/photo/2023/06/04/15/51/mountains-8040132_640.jpg' alt='dogstory' />
                </div>


                <div className='  w-[55%] pl-10 relative '>  
 
                  <div className='flex justify-between items-center py-5 '>

                    <div className='flex items-center '>
                      <div>
                        <img className='w-9 h-9 rounded-full ' src='https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_640.jpg' alt='dogstory' />
                      </div>
                      <div className='ml-2 '>
                        <p>user name</p> 
                      </div>
                    </div> 
                    <BsThreeDots/> 
                  </div>

                   

                  <hr/> 

                  <div className='comment'>
                    {[1,1,1,1,1,1,1,1].map((comment)=><CommentCard/>)}
                  </div>




                  <div className='absolute bottom-0'>
                    

                      {/* ///////////////////  heart comment save bar */}
                    <div className='py-5 flex justify-between items-center w-full '>
                        <div className='flex space-x-2 px-2' >
                          {isPostLiked ? <AiFillHeart  className='text-xl cursor-pointer text-red-700' onClick={handlePostLike}/>: <AiOutlineHeart  className='text-xl cursor-pointer' onClick={handlePostLike}/>}
                          <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                          <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'  />
                        
                        </div>

                        <div className='cursor-pointer px-2'>
                            {isSaved? <BsBookmarkFill onClick={handleSave}/> : <BsBookmark  onClick={handleSave}/>}
                        </div>
  
                    </div>
  
  {/*/////////////////// like and comment showinf bar */}
                    <div  className='w-full py-2 '>
                        <p>10 likes</p>
                        <p className='opacity-50 text-sm '> 1 day ago</p>
                    </div>

                    <div className='flex items-center w-full'>
                        <div className='flex w-full items-center '>
                            <BsEmojiSmile/>
                            <input className='commentInput' type='text' placeholder='Add a comment...' />
                        </div>
                    </div>

                  </div>
                  
                </div> 
            </div>
          </ModalBody> 


        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal