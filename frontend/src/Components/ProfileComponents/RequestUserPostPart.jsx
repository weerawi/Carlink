import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { BiBookmark } from 'react-icons/bi'
// import { useNavigate } from 'react-router-dom'
import RequestPostCard from './RequestPostCard'

const RequestUserPostPart = () => {

    const [activeTab, setActiveTab] =  useState('Post ');
    // const navigate = useNavigate();

    const setActiveTabHandler = (tab) => {
        setActiveTab(tab);
        if(tab==="Post"){
            // navigate("/post")
        }else if(tab==="Reels"){
            // navigate("/reels")
        } else if(tab==="Saved"){
            // navigate("/saved")
        } else if(tab==="Tagged"){
            // navigate("/tagged")
        }
    }


    const tabs= [
        {
            tab:"Post",
            icon:<AiOutlineTable/>,
            activeTab:""
        },
        {
            tab:"Reels",
            icon:<RiVideoAddLine/>
        },
        
        {
            tab:"Saved",
            icon:<BiBookmark/>
        },
        {
            tab:"Tagged",
            icon:<AiOutlineUser/>
        }
    ]

  return (

    <div>

        <div className='mt-5 flex   space-x-10 border-t relative'>
            {tabs.map((item) =>(
                <div onClick={()=>setActiveTabHandler(item.tab)} 
                className={`${activeTab===item.tab?'border-t border-black':'opacity-60'} flex uppercase cursor-pointer items-center space-x-1  text-sm py-2`}> 
                    <p>{item.icon}</p>
                    <p>{item.tab}</p>
                </div>
            ))}
        </div>

        <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1].map((item)=><RequestPostCard/>)}
            </div>
        </div>
    </div>
  )
}

export default RequestUserPostPart