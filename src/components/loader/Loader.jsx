import React from 'react';
import styles from "./Loader.module.scss";
import loaderImg from "../../assets/loader.git";

const Loader = () => {
  return (
    <div className = {styles.wrapper}>
      <div className = {styles.loader}>
        <img src = "" alt = "Loading" />
      </div>
    </div>
  );
};

export default Loader;