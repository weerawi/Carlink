import React, { useEffect, useState } from 'react'
import {IoReorderThreeOutline} from "react-icons/io5";
import { mainu } from '../SidebarConfig';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import CreatePostModal from '../Post/CreatePostModal';
import SearchComponents from '../Search/SearchComponents';

const Sidebar = () => {

    const [activeTab, setActiveTab] =  useState(false);
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSearchVisible,setIsSearchVisible] = useState(false);

 

    const handleTabClick = (title) => {
        setActiveTab(title); 
        if(title==="Profile"){
            navigate("/username")
            setIsSearchVisible(false);
        }else if(title==="Home"){
            navigate("/")
            setIsSearchVisible(false);
        } else if(title==="Create"){
            onOpen();
            setIsSearchVisible(false);
        }else if(title === "Search"){
            setIsSearchVisible(true);
        }else {
            setIsSearchVisible(false);
        }
    }


  return (
    <div className='sticky top-0 h-[100vh] flex'>
        <div className='flex flex-col justify-between h-full px-2'>
            {<div>

                {activeTab !== "Search" && <div className='pt-10'>
                    <img className='w-40 ' src='/pngwing.com.png' alt='instagram' />
                </div>}

                <div className='mt-10'>
                    {mainu.map((item) => 
                    <div onClick={()=>handleTabClick(item.title)}   className='flex items-center mb-5 cursor-pointer text-lg'>
                    {activeTab === item.title? item.activeIcon: item.icon} 
                    {activeTab !== "Search" && <p className={activeTab === item.title? "font-bold": "font-medium"}>{item.title}</p>}
                        

                    </div>
                    )}
                </div>
            </div>}


        <div className='flex items-center cursor-pointer pb-10'>
            <IoReorderThreeOutline className='text-2xl'/>
            {activeTab !== "Search" && <p  className='ml-5'>More</p>}
        </div>

        </div>

        <CreatePostModal onClose={onClose} isOpen={isOpen} />
        {isSearchVisible && <SearchComponents/>}

    </div>
  )
}

export default Sidebar;