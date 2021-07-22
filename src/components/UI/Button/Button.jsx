import React from 'react';
import classes from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button className={`${classes['btn']}`} onClick={() => loadMore()}>
      load more
    </button>
  );
};

export default Button;
