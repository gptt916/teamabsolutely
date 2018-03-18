import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import personsReducer from './Stores/reducers/persons';
import showPersonsReducer from './Stores/reducers/showPersons';
import navbarReducer from './Stores/reducers/navbar';
import authReducer from './Stores/reducers/auth';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.request.use(request => {
    request.headers.Authorization = cookies.get('access_token');
    return request;
}, error => {
    Promise.reject(error);
});

const rootReducer = combineReducers({
    persons: personsReducer,
    showPersons: showPersonsReducer,
    navbar: navbarReducer,
    auth: authReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
registerServiceWorker();
