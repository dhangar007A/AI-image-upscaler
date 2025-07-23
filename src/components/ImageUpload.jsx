import React from 'react'


const ImageUpload = (props) => {
    const ShowImageHandler = (event) => {
        const file = event.target.files[0]
        if (file) {
            props.uploadImageHandler(file)
        }
    }

    return (
        <div className='bg-white shadow-md rounded-2xl p-6 w-full max-w-2xl'>
            <label htmlFor='fileInput'
                className='block w-full border-2 border-dashed border-gray-300 rounded-lg items-center justify-center cursor-pointer hover:border-blue-300 transition-colors p-6'>
                <input type='file' id='fileInput' className='hidden' onChange={ShowImageHandler} />
                <span className='text-lg font-medium text-gray-600'>click and drag image here</span>
            </label>
        </div>
    )
}

export default ImageUpload
