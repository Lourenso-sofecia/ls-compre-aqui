import { BrowserRouter, Route, Routes, Switch } from "react-router-dom"; 

import { Header, Footer } from './components';

import {Home, Contact} from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path ='/contact' component={Contact} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
