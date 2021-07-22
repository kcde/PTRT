import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.creators}>
        <p>
          with <i className="fas fa-heart"></i> by <a href="https://github.com/kcde">keside</a>
        </p>
        <div className={classes.socials}>
          <a href="#">
            <i className="fab fa-github-alt"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="#">
            <i className="far fa-paper-plane"></i>
          </a>
        </div>
      </div>

      <div className={classes.acknwl}>
        <p>
          All photos are gotten from the <a href="https://unsplash.com/">unsplash API</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
