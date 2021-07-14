import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { BlurhashCanvas } from 'react-blurhash';

import './Photo.css';

const Photo = ({ src }) => {
  const loadedHandler = () => {
    setLoaded(true);
  };

  const photoInfo = (
    <div className="photo__info">
      <div className="photo__info-img">
        <img
          src="https://images.unsplash.com/profile-1599446683222-b1e5543a0b3dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          alt=""
        />
      </div>
      <p className="photo__info-name">constantine</p>
    </div>
  );

  return (
    <div className="photo">
      {photoInfo}

      <div className="photo-main">
        {' '}
        <BlurhashCanvas hash="L13[xT-;4nIU-;WB9FIUD%Rj%Mt7" width={32} height={32} punch={1} />
        <img
          style={{ position: 'relative', zIndex: 1 }}
          src={src}
          alt="photo 1"
          onLoad={loadedHandler}
        />
      </div>
    </div>
  );
};

export default Photo;
