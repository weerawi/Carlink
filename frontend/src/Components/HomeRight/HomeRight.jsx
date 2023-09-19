import React from 'react'
import SuggetionCard from './SuggetionCard'

const HomeRight = () => {
  return (
    <div>
      <div>

        <div className='flex justify-between items-center'>

          <div className='flex items-center'>
            <div>
              <img className='w-12 h-12 rounded-full ' src='https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_640.jpg' alt='dogstory' />
            </div>
            <div className='ml-3'>
              <p>Full name</p>
              <p className='opacity-70'>user name</p>
            </div>
          </div>

          <div>
            <p className='text-blue-700  font-semibold'>Switch</p>
          </div>
        </div>

        <div className='space-y-5 mt-10'>
          {[1,1,1,1,1].map((item)=><SuggetionCard/>)}
        </div>
      </div>
    </div>
  )
}

export default HomeRight