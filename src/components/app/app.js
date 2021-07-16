import "../../index";
// import { useTranslation } from 'react-i18next';
import React from "react";
import AppHeader from '../app-header/app-header';
import { MainPage, SprintPage, ITPage, StudentPage, GalleryPage, } from '../pages/index';
import AppFooter from '../footer/app-footer';
import { Route, Switch } from "react-router-dom";
function App() {


  return (
    <div className="App">
      <AppHeader/>
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route path="/sprint" component={ SprintPage } />
        <Route path="/IT" component={ ITPage } />
        <Route path="/student" component={ StudentPage } />
        <Route path="/gallery" component={ GalleryPage } />
        {/* <Route path="/contact" component={ Contact } /> */}
      </Switch>
      <AppFooter/>
    </div>
  );
}

export default App;
