import React, { useState } from 'react'

const ImageUpload = (props) => {
  const [isDragging, setIsDragging] = useState(false)

  const ShowImageHandler = (event) => {
    const file = event.target.files[0]
    if (file) {
      props.uploadImageHandler(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      props.uploadImageHandler(file)
    }
  }

  return (
    <div className='upload-card fade-in fade-in-delay-1'>
      <label
        htmlFor='fileInput'
        className='upload-zone'
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          borderColor: isDragging ? 'rgba(124, 58, 237, 0.6)' : undefined,
          background: isDragging ? 'rgba(124, 58, 237, 0.08)' : undefined,
        }}
      >
        <input
          type='file'
          id='fileInput'
          accept='image/*'
          onChange={ShowImageHandler}
          style={{ display: 'none' }}
        />
        <span className='upload-icon'>✦</span>
        <div className='upload-title'>Drop your image here or click to browse</div>
        <div className='upload-subtitle'>AI will enhance your image to 4x resolution</div>
        <div className='upload-formats'>
          <span className='format-tag'>JPG</span>
          <span className='format-tag'>PNG</span>
          <span className='format-tag'>WEBP</span>
          <span className='format-tag'>JPEG</span>
        </div>
      </label>
    </div>
  )
}

export default ImageUpload
