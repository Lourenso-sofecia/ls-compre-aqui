import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./auth.module.scss";

import Card from '../../components/card/Card';
import resetImg from "../../assets/resetImg.jpg";


const Reset = () => {
  const [email, setEmail] = useState("");

  return (
    <section className = { `container ${styles.auth}` }>
      <Card>
        <div className = {styles.form}>
          <h2>Reset Password</h2>
          <form action = "">
            <input 
              type = "email" 
              value = {email}
              onChange = { (e) => setEmail(e.target.value)}
              placeholder = 'lsdevgamer@gmail.com' 
              required 
              />
            <button className = '--btn --btn-primary --btn-block'>Reset Password</button>
            <div className = {styles.links}>
              <p>
                <Link to = "/login" className = 'txt-reset'> Login </Link>
              </p>
              <p>
                <Link to = "/register" className = 'txt-reset'> Register </Link>
              </p>
            </div>
          </form>

        </div>
      </Card>
      <div className = {styles.img}>
        <img src={resetImg} alt="Reset" width="400" />
      </div>
    </section>
  );
};

export default Reset;