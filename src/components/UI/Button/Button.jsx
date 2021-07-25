import React from 'react';
import classes from './Button.module.css';

const Button = ({ loadMore, children }) => {
  return (
    <button className={`${classes['btn']}`} onClick={() => loadMore()}>
      {children}
    </button>
  );
};

export default Button;
