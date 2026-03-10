import React from 'react';
import Loading from './Loading.jsx';

const ImagePreview = (props) => {
  return (
    <div className='preview-grid fade-in fade-in-delay-2'>
      {/* Original Image */}
      <div className='preview-card'>
        <div className='preview-header original'>
          <span className='preview-header-dot'></span>
          Original
        </div>
        <div className='preview-body'>
          {props.uploaded ? (
            <img src={props.uploaded} alt='Original' />
          ) : (
            <div className='preview-placeholder'>
              <span className='placeholder-icon'>🖼</span>
              <span className='placeholder-text'>Your image will appear here</span>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className='preview-card enhanced-card'>
        <div className='preview-header enhanced'>
          <span className='preview-header-dot'></span>
          Enhanced
        </div>
        <div className='preview-body'>
          {props.enhanced ? (
            <div>
              <img src={props.enhanced} alt='Enhanced' />
              <a
                href={props.enhanced}
                download='enhanced-image.png'
                target='_blank'
                rel='noopener noreferrer'
                className='download-btn'
              >
                ⬇ Download Enhanced
              </a>
            </div>
          ) : props.loading ? (
            <Loading />
          ) : (
            <div className='preview-placeholder'>
              <span className='placeholder-icon'>✨</span>
              <span className='placeholder-text'>Enhanced image will appear here</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
