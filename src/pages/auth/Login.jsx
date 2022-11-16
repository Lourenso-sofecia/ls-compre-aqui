import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./auth.module.scss";
import { FaGoogle } from 'react-icons/fa';

import Card from '../../components/card/Card';
import loginImg from "../../assets/loginImg.jpg";


const Login = () => {
  return (
    <section className = { `container ${styles.auth}` }>
      <div className = {styles.img}>
        <img src={loginImg} alt="Login" width="400" />
      </div>
      <Card>
        <div className = {styles.form}>
          <h2>Login</h2>
          <form action = "">
            <input type = "text" placeholder = 'lsdevgamer@gmail.com' required />
            <input type = "password" name="" id="" placeholder = 'Password' required />
            
            <button className = '--btn --btn-primary --btn-block'>Login</button>
            <div className = {styles.links} >
              <Link to = "/reset" className = 'txt-reset'>              
                Reset Password
              </Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className = '--btn-google --btn-danger -btn-block'>
            <span className = '--btn-google-space'><FaGoogle color = '#fff' size={12} /> </span>
              Login With Google
            
          </button>
          <span className = {styles.register}>
            <p className = 'txt-reset'>Don´t have an account ?</p>
            <Link to = "/register" className = 'txt-reset'>Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;