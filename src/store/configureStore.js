import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import employeeReducer from '../reducers/employee';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            employee: employeeReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

