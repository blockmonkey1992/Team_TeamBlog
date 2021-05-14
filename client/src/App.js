import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Contact from "./Components/Contact/Contact"
import Introduce from './Components/Introduce/Introduce';
import Login from './Components/Login/Login';
import Portfolio from './Components/Portfolio/Portfolio';
import Register from './Components/Register/Register';
import Footer from "./Components/Footer/Footer";
import Detail from "./Components/Detail/Detail";
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
// import { Provider } from 'react-redux';
import Posting from './Components/Posting/Posting';
import Auth from './hoc/auth'

function App() {
  return (
    <div className="App">
      <Header />
    
      <Switch>
        <Route exact path='/' component={Auth(LandingPage, null)}/>
        <Route path='/introduce' component={Auth(Introduce , null)}/>
        <Route path='/portfolio' component={Auth(Portfolio, null)}/>
        <Route path='/contact' component={Auth(Contact ,null)}/>
        <Route path='/detail:id' component={Auth(Detail, null)}/>
        <Route path='/register' component={Auth(Register, false)}/>
        <Route path='/login' component={Auth(Login,false)}/>
        <Route path='/profile/:user' component={Auth(Profile,true)} />
        <Route path='/search' component={Auth(Search , null)}/>
        <Route path='/create' component={Auth(Posting, false, true)}/>
      </Switch>
    
      <Footer />
    </div>
  );
}

export default App;
