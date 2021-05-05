import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Contact from "./Components/Contact/Contact"
import Introduce from './Components/Introduce/Introduce';
import Login from './Components/Login/Login';
import Portfolio from './Components/Portfolio/Portfolio';
import Register from './Components/register/register';
import Footer from "./Components/Footer/Footer";
import Detail from "./Components/Detail/Detail";
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Posting from './Components/Posting/Posting';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/introduce' component={Introduce}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/detail:id' component={Detail}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/profile/:user' component={Profile} />
        <Route path='/search' component={Search}/>
        <Route path='/create' component={Posting}/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
