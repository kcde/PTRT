import React, { useState } from 'react';
import Photo from './Photo/Photo';
import './Photos.css';

const Photos = () => {
  return (
    <div className="photo-grid">
      <Photo
        src={
          'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHwxfHxibGFja19hbmRfd2hpdGV8MTYyNTg2MTE1Mw&ixlib=rb-1.2.1&q=80&w=1080'
        }
      />
      <Photo
        src={
          'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHwxfHxibGFja19hbmRfd2hpdGV8MTYyNTg2MTE1Mw&ixlib=rb-1.2.1&q=80&w=1080'
        }
      />
      <Photo
        src={
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHwxMHx8cGVvcGxlfGVufDB8fHx8MTYyNjAxNDk2OQ&ixlib=rb-1.2.1&q=80&w=1080'
        }
      />
      <Photo
        src={
          'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHw0fHxwZW9wbGV8ZW58MHx8fHwxNjI2MDE0OTY5&ixlib=rb-1.2.1&q=80&w=1080'
        }
      />
      <Photo
        src={
          'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHwxfHxibGFja19hbmRfd2hpdGV8MTYyNTg2MTE1Mw&ixlib=rb-1.2.1&q=80&w=1080'
        }
      />

      <Photo
        src={
          'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHw0fHxwZW9wbGV8ZW58MHx8fHwxNjI2MDE0OTY5&ixlib=rb-1.2.1&q=80&w=1080'
        }
      />

      <Photo
        src={
          'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHwxfHxibGFja19hbmRfd2hpdGV8MTYyNTg2MTE1Mw&ixlib=rb-1.2.1&q=80&w=1080'
        }
      />
    </div>
  );
};

export default Photos;
