import React, { useState } from 'react';
import ImageUploader from './ImageUpload.jsx';
import ImagePreview from './ImagePreview.jsx';
import { enhancedImageAPI } from '../utils/enhancedimageApi.js';

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);      // for showing uploaded image preview
    const [enhancedImage, setEnhancedImage] = useState(null);  // for showing enhanced image from API
    const [loading, setLoading] = useState(false);             // loading spinner control

    const uploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));  // Show uploaded image preview immediately
        setEnhancedImage(null);                     // Clear previous enhanced image
        setLoading(true);                           // Start loading spinner

        try {
            const response = await enhancedImageAPI(file);  // Call enhancement API
            setEnhancedImage(response?.image);             // Use `.image` from API result
        } catch (error) {
            console.error("Error enhancing image:", error);
        } finally {
            setLoading(false);  // Hide loader
        }
    };

    return (
        <>
            <ImageUploader uploadImageHandler={uploadImageHandler} />
            <ImagePreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage} //  now enhancedImage is a proper URL
            />
        </>
    );
};

export default Home;

