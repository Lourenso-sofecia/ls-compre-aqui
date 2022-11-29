import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/config';

import { Link, useNavigate } from 'react-router-dom';
import styles from "./auth.module.scss";

import Card from '../../components/card/Card';
import resetImg from "../../assets/resetImg.jpg";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/Loader';

const Reset = () => {
  const [email, setEmail] = useState("");  
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then( () => {
        toast.success("Check your email to reset your password");
        navigate("/login");
        setIsLoading(false);
      })
      .catch( (error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };
  
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className = { `container ${styles.auth}` }>
        <Card>
          <div className = {styles.form}>
            <h2>Reset Password</h2>
            <form onSubmit = {resetPassword}>
              <input 
                type = "email" 
                value = {email}
                onChange = { (e) => setEmail(e.target.value)}
                placeholder = 'lsdevgamer@gmail.com' 
                required 
                />
              <button type='submit' className = '--btn --btn-primary --btn-block'>Reset Password</button>
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
    </>
  );
};

export default Reset;