import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './components/Photos';
import classes from './App.module.css';
import Button from './components/UI/Button/Button';
import { NavLink, Route, Switch, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const [photos, setPhotos] = useState([]);
  const [BWPhotos, setBWPhotos] = useState([]);
  const [pageCount, setPageCount] = useState(2);
  const url = 'https://api.unsplash.com/search/photos?query=people&per_page=30';
  const BWUrl =
    'https://api.unsplash.com/search/photos?query=people&per_page=15&color=black_and_white';

  const getPhotos = (url, setStateFunction) => {
    console.log(url);
    axios
      .get(url, {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
        },
      })
      .then((response) => {
        setStateFunction(response.data.results);
      });
  };

  useEffect(() => {
    getPhotos(url, setPhotos);
    getPhotos(BWUrl, setBWPhotos);
  }, []);
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.logo}>
          <p>prtrts</p>
        </div>
        <nav className={classes.nav}>
          <NavLink
            to="/"
            exact={true}
            className={classes['nav-link']}
            activeClassName={classes.selected}
          >
            All
          </NavLink>
          <NavLink to="/bw" className={classes['nav-link']} activeClassName={classes.selected}>
            b/w
          </NavLink>
          <NavLink to="/about" className={classes['nav-link']} activeClassName={classes.selected}>
            about
          </NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/about" component={''} />
          <Route path="/">
            <Photos
              photos={location.pathname === '/' ? photos : BWPhotos}
              pageCounter={pageCount}
            />
          </Route>
        </Switch>

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
  );
};

export default App;
