import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app/app';
import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import ServiceContext from './components/service-context';
import store from './store';
import { I18nextProvider } from 'react-i18next';
import transFunc from './translations/transFunc';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
            <ServiceContext.Provider value={restoService}>
                <Router>
                    <I18nextProvider i18n={transFunc}>
                        <App/>
                    </I18nextProvider>
                </Router>
            </ServiceContext.Provider>
    </Provider>
    , document.getElementById('root')
);