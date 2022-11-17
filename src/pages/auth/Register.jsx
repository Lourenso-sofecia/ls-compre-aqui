import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

import { Link,  } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import styles from "./auth.module.scss";
import { FaGoogle } from 'react-icons/fa';

import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import registerImg from "../../assets/img.jpg";


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [mensagem, setmensagem] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
    if(password !== confirmPassword) 
    {
      toast.error("Passwords do not match")
    }
    else
    {
      setIsLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration successful...")
        navigate("/login");
        //...
      })
      .catch((error) =>{
        toast.error(error.message);
        setIsLoading(false);
      });
    }
    
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className = { `container ${styles.auth}` }>
        <Card>
          <div className = {styles.form}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input 
                type = "text" 
                placeholder = 'Nome' 
                value = {name}
                onChange = { (e) => setName(e.target.value)}
                required 
              />
              <input 
                type = "email" 
                placeholder = 'lsdevgamer@gmail.com' 
                value = {email}
                onChange = { (e) => setEmail(e.target.value)}
                required 
              />
              <p>{mensagem}</p>
              <input 
                type = "password" 
                placeholder = 'Password' 
                value = {password}
                onChange = { (e) => setPassword(e.target.value)}
                required 
              />
              <input 
                type = "password"  
                placeholder = 'Confirm Password' 
                value = {confirmPassword}
                onChange = { (e) => setConfirmPassword(e.target.value)}
                required 
              />
              <button type='submit' className = '--btn --btn-primary --btn-block'>Register</button>
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
    </>
  );
};

export default Register;