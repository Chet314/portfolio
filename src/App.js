import React from 'react';
import MainContainer from './Components/Main/mainContainer';
import PhotoContainer from './Components/Main/Photo/photoContainer';
import NavContainer from './Components/Nav/navContainer';
import AboutContainer from './Components/Main/About/aboutContainer';
import Contacts from './Components/Main/Contacts/contact';
import ElementContainer from './Components/Main/Element/elementContainer';
import {Route, Switch, Redirect} from 'react-router-dom';


const App = () => {
  return (
    <React.Fragment>
      <nav>
        <NavContainer />
      </nav>
      <main> 
        <Switch>
        <Route path = "/main" render = {() => <MainContainer />} />
        <Route path = "/about" render = {() => <AboutContainer />} />
        <Route path = "/contacts" render = {() => <Contacts />} />
        <Route path = "/photo/:id" render = {() => <PhotoContainer />} />
        <Route path = "/element/:id" render ={() => <ElementContainer />} />
        <Redirect from ='/' to ='/main' />
       </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
