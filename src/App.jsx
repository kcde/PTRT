import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from "./components/Photos"
import "./App.css";
import Button from "./components/UI/Button/Button"

const App = () => {

  const [photos, setPhotos] = useState([]);


  // useEffect(() =>{
  //   axios.get('https://api.unsplash.com/search/photos?query=people&orientation=portrait&color=orange&per_page=30',{
  //     headers: {
  //       Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`
  //     }
  //   })
  //   .then(response =>console.log(response))
  // },[])
  return (
    <div className="container">
      <header>
        <div className="logo">
          <p>prtrts</p>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">All</a>
          <a href="#" className="nav-link">b/w</a>
          <a href="#" className="nav-link">about</a>
        </nav>
      </header>
      <main>


      <Photos />

      <Button />
      </main>



      <footer className="footer">
        <div className="creators">
          <p>with <i className="fas fa-heart"></i> by <a href="https://github.com/kcde">keside</a></p>
          <div className="socials">
            <a href="#"><i className="fab fa-github-alt"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="far fa-paper-plane"></i></a>
          </div>
        </div>

        <div className="acknwl">
          <p>All photos are gotten from the <a href="https://unsplash.com/">unsplash API</a></p>
        </div>
      </footer>
    </div>
  );
};

export default App;
