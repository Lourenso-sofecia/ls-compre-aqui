import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./auth.module.scss";
import { FaGoogle } from 'react-icons/fa';
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import { auth } from '../../firebase/config';

import Card from '../../components/card/Card';
import loginImg from "../../assets/loginImg.jpg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/Loader';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  //----------------------------------------------------------------
  const loginUser = (e)=>{
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setIsLoading(false);
      toast.success("Login successful...");
      navigate("/");
    })
    .catch((error) => {
      toast.error(error.message);
      setIsLoading(false);
    });
  };
  //----------------------------------------------------------------
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const user = result.user;
      toast.success("Login SuccessFull");
      navigate("/");
      // ...
    }).catch((error) => {
      // Handle Errors here.
      toast.error(error.message);
      
    });
  };
  //----------------------------------------------------------------
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className = { `container ${styles.auth}` }>
        <div className = {styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>
        <Card>
          <div className = {styles.form}>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
              <input 
                type = "email"
                value={email}
                onChange = { (e) =>setEmail(e.target.value)}
                placeholder = 'lsdevgamer@gmail.com' 
                required 
              />
              <input 
                type = "password"
                value={password}
                onChange = { (e) =>setPassword(e.target.value)}
                placeholder = 'Password' 
                required 
              />
              
              <button className = '--btn --btn-primary --btn-block'>Login</button>
              <div className = {styles.links} >
                <Link to = "/reset" className = 'txt-reset'>              
                  Reset Password
                </Link>
              </div>
              <p>-- or --</p>
            </form>
            <button type='submit' onClick={signInWithGoogle}  className = '--btn-google --btn-danger -btn-block'>
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
    </>
  );
};

export default Login;