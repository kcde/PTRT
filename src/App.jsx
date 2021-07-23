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
  const [allPhotos, setAllPhotos] = useState([]);
  const [coloredPhotos, setColoredPhotos] = useState([]);
  const [BWPhotos, setBWPhotos] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const url = 'https://api.unsplash.com/collections/zbhckmbH8xI/photos?per_page=30';
  const BWUrl = 'https://api.unsplash.com/collections/KzzhCSiDhYE/photos?per_page=30';

  const loadMoreHandler = () => {
    setPageCount(pageCount + 1);
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
      });
  };

  useEffect(() => {
    getPhotos(url, setColoredPhotos);
    getPhotos(BWUrl, setBWPhotos);
    setAllPhotos([...coloredPhotos, ...BWPhotos]);
    //combining both black and white and colored photos to one array
    let newAllPhotos = [...BWPhotos, ...coloredPhotos];

    //sorting combined arrays with date created
    let sortedAllPhotos = newAllPhotos.sort((firstEl, secondEl) => {
      if (firstEl['created_at'] < secondEl['created_at']) {
        return 1;
      }
      if (firstEl['created_at'] > secondEl['created_at']) {
        return -1;
      }

      return 0;
    });
    setAllPhotos(sortedAllPhotos);
    console.log(sortedAllPhotos);
  }, []);
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/about" component={''} />
          <Route path="/">
            <Photos
              photos={location.pathname === '/' ? allPhotos : BWPhotos}
              pageCounter={pageCount}
            />
          </Route>
        </Switch>

        <Button loadMore={loadMoreHandler} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
