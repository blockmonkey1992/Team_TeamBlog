import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Contact from "./Components/Contact/Contact"
import Introduce from './Components/Introduce/Introduce';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from "./Components/Footer/Footer";
import Detail from "./Components/Detail/Detail";
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Posting from './Components/Posting/Posting';
import Register from "./Components/Register/register";
import ModifyPost from './Components/Posting/ModifyPost';
import AuthCheck from "./hoc/auth";


function App() {
  return (
    <div className="App">
      <Header />

      {/* Switch는 조건에 맞는 component를 하나만 렌더링 시켜주는 역할을 한다. */}
      <Switch>
        {/* AuthCheck을 통해 유저의 권한을 확인한다. (null<아무나>, false<비로그인유저만>, true<로그인유저만>) */}
        {/* 단, 세번째 인자 true는 admin 유저만 사용가능 한 것. */}
        {/* (Blockmonkey) */}
        <Route exact path='/' component={AuthCheck(LandingPage, null)}/>
        <Route path='/introduce' component={AuthCheck(Introduce, null)}/>
        <Route path='/portfolio' component={AuthCheck(Portfolio, null)}/>
        <Route path='/contact' component={AuthCheck(Contact, null)}/>
        <Route path='/detail/:id' component={AuthCheck(Detail, null)}/>
        <Route path='/register' component={AuthCheck(Register, false)}/>
        <Route path="/profile/:user" component={AuthCheck(Profile, true)} />  
        <Route path='/search' component={AuthCheck(Search, null)}/>
        <Route path='/create' component={AuthCheck(Posting, true, true)} />
        <Route path='/update/:id' component={AuthCheck(ModifyPost, true, true)} />
      </Switch>
    
      <Footer />
    </div>
  );
}

export default App;
