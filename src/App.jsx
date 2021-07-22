import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './components/Photos';
import classes from './App.module.css';
import Button from './components/UI/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
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
      <Header />
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

      <Footer />
    </div>
  );
};

export default App;
