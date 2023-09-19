import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import "./CreatePostModal.css"
import { GrEmoji  } from  'react-icons/gr'
import { GoLocation  } from  'react-icons/go'

const CreatePostModal = ({isOpen,onClose}) => {

    const [isDragOver, setIsDragOver] = useState(false);
    const [file,setFile] = useState();
    const [caption,setCaption] = useState("");

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragOver(false);
        const dropFile = event.dataTransfer.files[0];
        if(dropFile.type.startsWith("image/") || dropFile.type.startsWith("video/")){
            setFile(dropFile)
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect= "copy";
        setIsDragOver(true);
    }

    const handleDragLeave = ( ) => { 
        setIsDragOver(false);
    }


    const handleOnChange = (e) => {
    
        const file = e.target.files[0];
        if(file && (file.type.startsWith("image/") || file.type.startsWith("video/"))){
            setFile(file);
            console.log("file :",file);
        }else{
            setFile(null);
            alert("Please select an image or Video");
        }

    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    }


  return (
    <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent> 
            <div className='flex justify-between py-1 px-10 items-center'>
                <p>Create New Post</p>
                <Button variant={"ghost"} size={'sm'} color={'blue'}>
                    Share
                </Button>
            </div> 
            <hr/> 
          <ModalBody> 
            <div className='h-[70vh]  justify-between pb-5   flex'> 

                <div className='w-[50%] '> 
                   {!file && <div 
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className='drag-drop h-full'>
                        <div>
                            <FaPhotoVideo className='text-3xl'/>
                            <p>Drag Photos or Videos Here</p>
                        </div>

                        <label htmlFor='file-upload' className='custom-file-upload'>Select From Computer</label>
                        <input className='fileInput ' type='file' id='file-upload' accept='image/*, video/*' onChange={handleOnChange} />
                    </div>}

                    {file && <img src={URL.createObjectURL(file)} alt=''/>} 
                </div>


                <div className='w-[1px] ml-5 border-2 h-full'> </div>

                <div className='w-[50%] l'>  
                    <div className='flex items-center px-2'> 
                        <img className='w-7 h-7 rounded-full ' src='https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_640.jpg' alt='dogstory' /> 
                        <p className='font-semibold ml-4'>Full name</p>  
                    </div> 
                    <div className='px-4'>
                        <textarea 
                          placeholder='Write a caption'
                          className='captionInput'
                          name='caption'
                          rows={8}
                          onClick={handleCaptionChange}
                        ></textarea>
                    </div>
                    <div className=' flex justify-between px-2'>
                        <GrEmoji/>
                        <p className='opacity-70'>{caption?.length}/2,200</p>
                    </div>

                    <hr/>
                    <div className='p-2 flex justify-between items-center'>
                        <input className='locationInput' type='text' placeholder='location' name='location' />
                        <GoLocation/>
                    </div>
                    <hr/>
                </div>


            </div>
          </ModalBody> 


        </ModalContent>
      </Modal>


    </div>
  )
}

export default CreatePostModal