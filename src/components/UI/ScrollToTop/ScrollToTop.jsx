import React, { useState } from 'react';
import styles from './ScrollToTop.module.css';

const ScrollToTop = ({ scrollBack }) => {
  return (
    <button className={styles.scroll} onClick={() => scrollBack()}>
      <i className="fas fa-caret-up"></i>
    </button>
  );
};

export default ScrollToTop;
