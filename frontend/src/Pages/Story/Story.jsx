import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {

    const story = [
        { 
            image: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            image: "https://images.pexels.com/photos/3892898/pexels-photo-3892898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            image: "https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            image: "https://images.pexels.com/photos/2524767/pexels-photo-2524767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            image: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]
  return (
    <div> 
        <StoryViewer  stories={story}/>
    </div>
  )
}

export default Story