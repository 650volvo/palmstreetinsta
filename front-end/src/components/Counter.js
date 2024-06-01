import { Component, useState, useEffect } from "react";

import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import axios from "axios";
import FixedBanner from "./FixedBanner.js";

//function based component
const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/images");
        console.log("response sent");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <main className={classes.counter}>
      <div className={classes.header}>
        <div className={classes.section}></div>
        <div className={classes.section}>
          <div className={classes.container}>
            <div className={classes.hleft}>
              <img src="/Instagram_logo.jpg" alt="Inst" />
            </div>
            <div className={classes.hmiddle}></div>
            <div className={classes.hright}>
              <button onClick={incrementHandler}>Log In</button>
              <button onClick={incrementHandler} className={classes.signup}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className={classes.section}></div>
      </div>

      <div className={classes.lower}>
        <div className={classes.profile}>
          <div className={classes.procontent}></div>
          <div className={classes.procontent}>
            <div className={classes.midcontainer}>
              <div className={classes.rowfirst}>
                <div className={classes.left}>
                  <img src="profile_n.jpg"></img>
                </div>
                <div className={classes.right}>
                  <div className={classes.status}>
                    <h2>#houseplants</h2>
                  </div>
                  <div className={classes.status}>
                    <p>10,691,848 posts</p>
                  </div>
                </div>
              </div>
              <div className={classes.rowtag}>
                <p>Top posts</p>
              </div>
              <div className={classes.rowpics}>
                <div className={classes.imagegallery}>
                  {images.map((image, index) => (
                    <div key={index} className={classes.imageitem}>
                      <img
                        src={image.download_url}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.procontent}></div>
        </div>
      </div>
      <FixedBanner />
    </main>
  );
};

export default Counter;
