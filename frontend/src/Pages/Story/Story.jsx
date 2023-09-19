import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {

    const story = [
        { 
            image: "https://images.pexels.com/photos/5184645/pexels-photo-5184645.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        { 
            image: "https://images.pexels.com/photos/3099309/pexels-photo-3099309.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        { 
            image: "https://images.pexels.com/photos/6805801/pexels-photo-6805801.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        { 
            image: "https://images.pexels.com/photos/4405941/pexels-photo-4405941.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        { 
            image: "https://images.pexels.com/photos/3889755/pexels-photo-3889755.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
    ]
  return (
    <div> 
        <StoryViewer  stories={story}/>
    </div>
  )
}

export default Story