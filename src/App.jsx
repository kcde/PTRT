import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './components/Photos';
import classes from './App.module.css';
import Button from './components/UI/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Switch, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const [coloredPhotos, setColoredPhotos] = useState([]);
  const [BWPhotos, setBWPhotos] = useState([]);
  const [allPhotos, setAllPhotos] = useState([...coloredPhotos, ...BWPhotos]);
  const [pageCount, setPageCount] = useState({ all: 1, bw: 1 });
  const url = 'https://api.unsplash.com/collections/zbhckmbH8xI/photos?per_page=30';
  const BWUrl = 'https://api.unsplash.com/collections/KzzhCSiDhYE/photos?per_page=30';

  const loadMoreHandler = () => {
    const currentRoute = location.pathname;
    // const countToChange = currentRoute === '/' ? 'all' : 'bw';
    // setPageCount({ ...pageCount, countToChange: pageCount[{ countToChange }] + 1 });
    if (currentRoute === '/') {
      setPageCount({ ...pageCount, all: pageCount.all + 1 });
    }

    if (currentRoute === '/bw') {
      setPageCount({ ...pageCount, bw: pageCount.bw + 1 });
    }
  };
  const getPhotos = (url, setStateFunction) => {
    axios
      .get(url, {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
        },
      })
      .then((response) => {
        setStateFunction(response.data);
        //updating all photos as response is received
        setAllPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
      });
  };

  const sort = (arr) => {
    //sorting combined arrays with date created
    return arr.sort((firstEl, secondEl) => {
      if (firstEl['created_at'] < secondEl['created_at']) {
        return 1;
      }
      if (firstEl['created_at'] > secondEl['created_at']) {
        return -1;
      }

      return 0;
    });
  };

  useEffect(() => {
    if (!coloredPhotos.length && !BWPhotos.length) {
      getPhotos(url, setColoredPhotos);
      getPhotos(BWUrl, setBWPhotos);
    }
  }, []);
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/about" component={''} />
          <Route path="/">
            <Photos
              photos={location.pathname === '/' ? sort(allPhotos) : BWPhotos}
              pageCounter={location.pathname === '/' ? pageCount.all : pageCount['bw']}
            />
            <Button loadMore={loadMoreHandler} />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
};

export default App;
