import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Photos from './components/Photos';
import classes from './App.module.css';
import Button from './components/UI/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop';
import { Route, Switch, useLocation } from 'react-router-dom';

const App = () => {
  const mainContainer = useRef(null);
  const location = useLocation();
  const [coloredPhotos, setColoredPhotos] = useState([]);
  const [BWPhotos, setBWPhotos] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [allPhotos, setAllPhotos] = useState([...coloredPhotos, ...BWPhotos]);
  const [pageCount, setPageCount] = useState({ all: 1, bw: 1 });
  const url = 'https://api.unsplash.com/collections/zbhckmbH8xI/photos?per_page=30';
  const BWUrl = 'https://api.unsplash.com/collections/KzzhCSiDhYE/photos?per_page=30';
  const loadMoreHandler = () => {
    const currentRoute = location.pathname;

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

  const isThereMore = () => {
    if (location.pathname === '/') {
      if (pageCount.all >= 9) {
        return false;
      }
    }
    if (location.pathname === '/bw') {
      if (pageCount.bw >= 3) {
        return false;
      }
    }

    return true;
  };

  const scrollTopHandler = () => {
    window.scroll(0, 0);
  };

  //useEffect for API call
  useEffect(() => {
    if (!coloredPhotos.length && !BWPhotos.length) {
      getPhotos(url, setColoredPhotos);
      getPhotos(BWUrl, setBWPhotos);
    }
  }, []);

  //useEffect for scroll position change

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
      // console.log(window.scrollY);
    });
  }, [scrollPosition]);

  return (
    <div className={classes.container} ref={mainContainer}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/">
            <Photos
              photos={location.pathname === '/' ? sort(allPhotos) : BWPhotos}
              pageCounter={location.pathname === '/' ? pageCount.all : pageCount['bw']}
            />
            <Button loadMore={isThereMore() ? loadMoreHandler : null}>
              {isThereMore() ? 'load more' : 'no more'}
            </Button>
          </Route>
        </Switch>
      </main>

      {scrollPosition > 500 ? <ScrollToTop scrollBack={scrollTopHandler} /> : null}
      <Footer />
    </div>
  );
};

export default App;
