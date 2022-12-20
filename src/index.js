import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.min.css';
import store from './app/store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
<Provider store={store}>
<App />
</Provider>
</Router>);