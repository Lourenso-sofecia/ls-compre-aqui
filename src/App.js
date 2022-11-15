import { BrowserRouter, Route, Switch } from "react-router-dom"; 

import { Header, Footer } from './components';

import {Home, Contact, Login, Register, Reset} from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path ='/' component = {Home} />
          <Route exact path ='/contact' component = {Contact} />
          <Route exact path ='/login' component = {Login} />
          <Route exact path ='/register' component = {Register} />
          <Route exact path ='/reset' component = {Reset} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
