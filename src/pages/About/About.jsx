import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <p className={styles.logo}>PRTRTS</p>
        <p className={styles.createText}>
          created and developed by <a href="http://github.com/kcde">keside</a>{' '}
        </p>
        <p className={styles.useText}>
          using <a href="http://unsplash.com">UNSPLASH API</a>{' '}
        </p>
      </div>
    </div>
  );
};

export default About;
