import React from 'react';
import Loading from './Loading.jsx';

const ImagePreview = (props) => {
    return (
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl'>
            {/* Original Image */}
            <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                <h2 className='text-lg font-semibold text-center bg-gray-800 text-white py-2'>Original Image</h2>
                {props.uploaded ? (
                    <img src={props.uploaded} alt='Original' className='w-full h-auto object-cover' />
                ) : (
                    <div className='flex items-center justify-center h-80 bg-gray-200'>No image selected</div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                <h2 className='text-lg font-semibold text-center bg-blue-900 text-white py-2'>Enhanced Image</h2>
                {props.enhanced ? (
                    <img src={props.enhanced} alt='Enhanced' className='w-full h-auto object-cover' />
                ) : props.loading ? (
                    <div className='flex items-center justify-center h-80 bg-gray-200'>
                        <Loading />
                    </div>
                ) : (
                    <div className='flex items-center justify-center h-80 bg-gray-200'>No image selected</div>
                )}
            </div>
        </div>
    );
};

export default ImagePreview;
