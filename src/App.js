import { BrowserRouter, Route, Routes } from "react-router-dom"; 

import { Header, Footer } from './components';

import {Home, Contact, Login, Register, Reset} from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path ='/' element = {<Home />} />
          <Route exact path ='/contact' element = {<Contact />} />
          <Route exact path ='/login' element = {<Login />} />
          <Route exact path ='/register' element = {<Register />} />
          <Route exact path ='/reset' element = {<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
