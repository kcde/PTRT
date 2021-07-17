import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { BlurhashCanvas } from 'react-blurhash';

import classes from './Photo.module.css';

const Photo = ({ photoData }) => {
  const { alt_description, blur_hash, urls, user } = photoData;

  const photoInfo = (
    <div className={classes.photo__info}>
      <div className={classes['photo__info-img']}>
        <img src={user.profile_image.medium} alt={user.name} />
      </div>
      <a className={classes['photo__info-name']}>{user.username}</a>
    </div>
  );

  return (
    <div className={classes.photo}>
      {photoInfo}
      <div className={classes['photo-main']}>
        <BlurhashCanvas hash={blur_hash} width={32} height={32} punch={1} />
        <img style={{ position: 'relative', zIndex: 2 }} src={urls.regular} alt={alt_description} />
      </div>
    </div>
  );
};

export default Photo;
