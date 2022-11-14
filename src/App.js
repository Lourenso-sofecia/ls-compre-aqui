import { BrowserRouter, Route, Routes, Switch } from "react-router-dom"; 

import { Header, Footer } from './components';

import {Home, Contact} from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          
            <Route path="/" element= { <Home/>} />
            <Route path="/contact " element= { <Contact/> } />
          
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
