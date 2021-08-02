import React, { useRef, useEffect } from 'react';
import styles from './About.module.css';
import { gsap } from 'gsap';

const About = () => {
  const transition = useRef(null);
  const body = useRef(null);
  //useEffect for page transition
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(transition.current, {
      duration: 0.7,
      width: '100%',
      left: '0%',
      ease: 'power3.easeInOut',
    });

    tl.to(transition.current, {
      duration: 0.4,
      right: '0%',
      left: '100%',
      width: '0%',
      // width: '0%',
      ease: 'power3.easeInOut',
      delay: 0.45,
    });

    gsap
      .to(body.current, {
        css: {
          opacity: '1',
          pointerEvents: 'auto',
        },
      })
      .delay(1.2);

    return () => {
      gsap.to(body.current, {
        css: {
          opacity: '0',
          pointerEvents: 'none',
        },
      });
    };
  }, []);
  return (
    <div className={styles.about}>
      <div ref={transition} className={styles.loadScreen}></div>
      <div ref={body} style={{ opacity: 0, pointerEvents: 'none' }} className={styles.body}>
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
