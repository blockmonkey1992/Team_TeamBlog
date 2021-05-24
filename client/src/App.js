import './App.css';
import {Route, Switch, } from 'react-router-dom';

import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Contact from "./Components/Contact/Contact"
import Introduce from './Components/Introduce/Introduce';
import Portfolio from './Components/Portfolio/Portfolio';
import Register from './Components/Register/Register';
import Footer from "./Components/Footer/Footer";
import Detail from "./Components/Detail/Detail";
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
// import { Provider } from 'react-redux';
import Posting from './Components/Posting/Posting';
import AuthCheck from "./hoc/auth";


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path='/' component={AuthCheck(LandingPage, null)}/>
        <Route path='/introduce' component={AuthCheck(Introduce, null)}/>
        <Route path='/portfolio' component={AuthCheck(Portfolio, null)}/>
        <Route path='/contact' component={AuthCheck(Contact, null)}/>
        <Route path='/detail:id' component={AuthCheck(Detail, null)}/>
        <Route path='/register' component={AuthCheck(Register, false)}/>
        <Route path="/profile/:user" component={AuthCheck(Profile, true)} />  
        <Route path='/search' component={Search}/>
        <Route path='/create' component={Posting}/>
      </Switch>
    
      <Footer />
    </div>
  );
}

export default App;
