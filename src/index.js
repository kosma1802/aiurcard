import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from "react-router-dom";
import 'antd-mobile/dist/antd-mobile.css';
// import {createBrowserHistory} from 'history'
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd-mobile';
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
// const history = createBrowserHistory()
ReactDOM.render(
    ( 
     <LocaleProvider locale={enUS}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
     </LocaleProvider>
    )
    , document.getElementById('root'));
registerServiceWorker();
