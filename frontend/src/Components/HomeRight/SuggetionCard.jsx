import React from 'react'

const SuggetionCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div  className='flex items-center'> 
          <img className='w-9 h-9 rounded-full ' src='https://images.pexels.com/photos/2405039/pexels-photo-2405039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='dogstory' />
           
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