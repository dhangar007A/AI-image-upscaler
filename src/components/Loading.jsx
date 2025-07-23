import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-80 bg-gray-200'>
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        <span className="ms-2">Enhancing...</span>
      </button>
    </div>
  );
};

export default Loading;
