import React from 'react';

const Loading = () => {
  return (
    <div className='loader-container'>
      <div className='loader-ring'></div>
      <div className='loader-text'>
        Enhancing your image
        <span className='loader-dots'>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default Loading;
