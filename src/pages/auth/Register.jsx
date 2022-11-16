import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./auth.module.scss";
import { FaGoogle } from 'react-icons/fa';

import Card from '../../components/card/Card';
import registerImg from "../../assets/img.jpg";


const Register = () => {
  return (
    <section className = { `container ${styles.auth}` }>
      <Card>
        <div className = {styles.form}>
          <h2>Register</h2>
          <form action = "">
          <input type = "text" placeholder = 'Nome' required />
            <input type = "email" placeholder = 'lsdevgamer@gmail.com' required />
            <input type = "password" name="" id="" placeholder = 'Password' required />
            <input type = "password" name="" id="" placeholder = 'Confirm Password' required />
            <button className = '--btn --btn-primary --btn-block'>Register</button>
          </form>
          
          <span className = {styles.register}>
            <p className = 'txt-reset'>Already an account ?  </p>
            <Link to = "/login" className = 'txt-reset'> Login</Link>
          </span>
        </div>
      </Card>
      <div className = {styles.img}>
        <img src={registerImg} alt="Register" width="400" />
      </div>
    </section>
  );
};

export default Register;