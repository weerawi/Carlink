import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import RequestUserPostPart from '../../Components/ProfileComponents/RequestUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>
        <div> 
            <ProfileUserDetails/>   
        </div>
        <div>
            <RequestUserPostPart/>
        </div>
    </div>
  )
}

export default Profile