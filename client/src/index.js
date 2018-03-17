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
import cockpitReducer from './Stores/reducers/cockpit';

const rootReducer = combineReducers({
    persons: personsReducer,
    showPersons: showPersonsReducer,
    navbar: navbarReducer,
    cockpit: cockpitReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
registerServiceWorker();
