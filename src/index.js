//styles
import './scss/style.scss';

// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store.js'

//components
import App from './App';
import Header from './components/Header';
import Requirements from './components/Requirements';
import About from './components/About';
import Users from './components/Users';
import Register from './components/Register';
import Footer from './components/Footer';


ReactDOM.render((
    <Provider store={store}>
        <App>
            <Header />
            <Requirements />
            <About />
            <Users />
            <Register />
            <Footer />
        </App>
    </Provider>
), document.getElementById('root'));

