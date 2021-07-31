import React, { useState, useEffect } from 'react';
import Photo from './Photo/Photo';
import LazyLoad from 'react-lazyload';

import classes from './Photos.module.css';

const Photos = ({ photos, pageCounter }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 700);

    // return () => {
    //   setScrollPosition(window.scrollY);
    // };
  }, []);
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
