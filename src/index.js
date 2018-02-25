import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FormContainer from './modules/form/form.container';
import configureStore from './store';
import './assets/scss/app.scss';

const store = configureStore;

ReactDOM.render(
    <Provider store={store}>
        <FormContainer/>
    </Provider>,
    document.getElementById('root')
);
