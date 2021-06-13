import { useTranslation } from 'react-i18next';
import React from "react";
import AppHeader from '../app-header/app-header';
import {mainPage} from '../pages/index';
import AppFooter from '../footer/app-footer'
function App() {


  return (
    <div className="App">
      <AppHeader/>
      <AppFooter/>
    </div>
  );
}

export default App;
