import "../../index";
// import { useTranslation } from 'react-i18next';
import React from "react";
import AppHeader from '../app-header/app-header';
import { mainPage } from '../pages/index';
import AppFooter from '../footer/app-footer';
import { Route, Switch } from "react-router-dom";
function App() {


  return (
    <div className="App">
      <AppHeader/>
      <Switch>
        <Route exact path="/" component={mainPage} />
        {/* <Route path="/" component={   } />
        <Route path="/" component={   } />
        <Route path="/" component={   } />
        <Route path="/contact" component={ Contact } /> */}
      </Switch>
      <AppFooter/>
    </div>
  );
}

export default App;
