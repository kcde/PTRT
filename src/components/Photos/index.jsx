import React, { useState } from 'react';
import Photo from './Photo/Photo';
import classes from './Photos.module.css';

const Photos = ({ photos, pageCounter }) => {
  return (
    <div className={classes['photo-grid']}>
      {photos.slice(0, pageCounter * 5).map((photo) => {
        return <Photo key={photo.id} photoData={photo} />;
      })}
    </div>
  );
};

export default Photos;
