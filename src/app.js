import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './styles/style.scss';
import configureStore from './store/configureStore';
import { getEmployeeDatabase } from './actions/employee'
import AppRouter from './routers/AppRouter';

const store = configureStore();

const result = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



store.dispatch(getEmployeeDatabase()).then(() => {

    ReactDOM.render(result, document.getElementById('root'));
})

