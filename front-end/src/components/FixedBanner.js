import React from "react";
import classes from "./FixedBanner.module.css";

const FixedBanner = () => {
  return (
    <div className={classes.fixedbanner}>
      <div className={classes.bannercontent}>
        <div className={classes.section}>
          <img src="/banner.jpg" alt="Instagram Logo" className="logo" />
        </div>
        <div className={classes.section}>
          <div className={classes.textcontent}>
            <p className={classes.title}>Log into Instagram</p>
            <p className={classes.description}>
              Log in to see photos and videos from friends and discover other
              accounts you'll love.
            </p>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.buttons}>
            <button className={classes.loginbutton}>Log In</button>
            <button className={classes.signupbutton}>Sign Up</button>
          </div>
        </div>
        <button className={classes.closebutton}>×</button>
      </div>
      
    </div>
  );
};

export default FixedBanner;
