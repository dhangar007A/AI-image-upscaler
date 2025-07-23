import React, { useState } from 'react'
import ImageUploader from './ImageUpload.jsx'
import ImagePreview from './ImagePreview.jsx'
import { enhancedImageAPI } from '../utils/enhancedimageApi.js'

const Home = () => {
    const [uploadImage, setuploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setloading] = useState(false)

const uploadImageHandler = async (file) => {
    setuploadImage(URL.createObjectURL(file))
    setloading(true)
    //call the API to enhance the image
    try{
        const enhanceedURL = await enhancedImageAPI(file)
        setEnhancedImage(enhanceedURL)
        setloading(false)
    }
    catch(error){
        console.error("Error enhancing image:", error)
    }
}

    return (
        <>
            <ImageUploader uploadImageHandler={uploadImageHandler} />
            <ImagePreview 
                loading={loading} 
                uploaded={uploadImage} 
                enhanced={enhancedImage} />
        </>
    )
}

export default Home
