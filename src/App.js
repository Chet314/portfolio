import React from 'react';
import MainContainer from './Components/Main/mainContainer';
import PhotoContainer from './Components/Main/Photo/photoContainer';
import Nav from './Components/Nav/nav';
import About from './Components/Main/About/about';
import Contacts from './Components/Main/Contacts/contact';
import {Route, Switch, Redirect} from 'react-router-dom';


const App = () => {
  return (
    <React.Fragment>
      <nav>
        <Nav />
      </nav>
      <main> 
        <Switch>
        <Route path = "/main" render = {() => <MainContainer />} />
        <Route path = "/about" render = {() => <About />} />
        <Route path = "/contacts" render = {() => <Contacts />} />
        <Route path = "/photo/:id" render = {() => <PhotoContainer />} />
        <Redirect from ='/' to ='/main' />
       </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
