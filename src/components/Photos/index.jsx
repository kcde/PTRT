import React from 'react';
import Photo from './Photo/Photo';
import LazyLoad from 'react-lazyload';

import classes from './Photos.module.css';

const Photos = ({ photos, pageCounter }) => {
  return (
    <div className={classes['photo-grid']}>
      {photos.slice(0, pageCounter * 5).map((photo) => {
        return (
          <LazyLoad key={photo.id} once>
            <Photo photoData={photo} />
          </LazyLoad>
        );
      })}
    </div>
  );
};

export default Photos;
