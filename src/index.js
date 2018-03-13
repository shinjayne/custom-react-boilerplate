import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';



import App from './containers/App/index';
import totalReducer from './reducers';


let store = createStore(totalReducer);

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();