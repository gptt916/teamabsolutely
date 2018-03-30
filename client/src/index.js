import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import personsReducer from './Stores/reducers/persons';
import showPersonsReducer from './Stores/reducers/showPersons';
import navbarReducer from './Stores/reducers/navbar';
import authReducer from './Stores/reducers/auth';
import mainReducer from './Stores/reducers/main';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const cookies = new Cookies();


axios.defaults.baseURL = 'https://teamabsolutely.herokuapp.com/api';

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
    auth: authReducer,
    main: mainReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>, 
                document.getElementById('root'));
registerServiceWorker();
