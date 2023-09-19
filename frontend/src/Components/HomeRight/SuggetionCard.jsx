import React from 'react'

const SuggetionCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div  className='flex items-center'> 
          <img className='w-9 h-9 rounded-full ' src='https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_640.jpg' alt='dogstory' />
           
          <div className='ml-3'>
            <p className='test-sm font-semibold '>Full name</p>
            <p className='test-sm font-semibold opacity-70'>user name</p>
          </div>
        </div>
        <p className='text-blue-700 text-sm font-semibold'>Follow</p>
      </div>
  )
}

export default SuggetionCard