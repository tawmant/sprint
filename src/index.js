import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app/app';
import ErrorBoundry from './components/error-boundry';
import Service from './services/service';
import ServiceContext from './components/service-context';
import store from './store';
import { I18nextProvider } from 'react-i18next';
import transFunc from './translations/transFunc';
import 'bootstrap/dist/css/bootstrap.min.css';



const service = new Service();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ServiceContext.Provider value={service}>
                <Router>
                    <I18nextProvider i18n={transFunc}>
                        <App/>
                    </I18nextProvider>
                </Router>
            </ServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);