import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './components/Photos';
import classes from './App.module.css';
import Button from './components/UI/Button/Button';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isBW, setIsBW] = useState(false);

  // useEffect(() =>{
  //   axios.get('https://api.unsplash.com/search/photos?query=people&orientation=portrait&color=orange&per_page=30',{
  //     headers: {
  //       Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`
  //     }
  //   })
  //   .then(response =>console.log(response))
  // },[])
  return (
    <Router>
      <div className={classes.container}>
        <header>
          <div className={classes.logo}>
            <p>prtrts</p>
          </div>
          <nav className={classes.nav}>
            <NavLink to="/" exact={true} className={classes['nav-link']} activeClassName="selected">
              All
            </NavLink>
            <NavLink to="/bw" className={classes['nav-link']} activeClassName="selected">
              b/w
            </NavLink>
            <NavLink to="/about" className={classes['nav-link']} activeClassName="selected">
              about
            </NavLink>
          </nav>
        </header>
        <main>
          <Route path={isBW ? '/bw' : '/'}>
            <Photos />
          </Route>

          <Button />
        </main>

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
      </div>
    </Router>
  );
};

export default App;
