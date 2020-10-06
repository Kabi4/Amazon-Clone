import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Contianer/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose , combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import basketReducer from './Store/Reducers/BasketReducer';

const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
        basket: basketReducer
});

const store = createStore(rootreducer,ComposeEnhancer(applyMiddleware(thunk)))

const app = (
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
            );

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
