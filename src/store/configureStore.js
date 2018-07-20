import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import initialState from '../store/initialState';

export default function configureStore() {
    /* eslint-disable no-underscore-dangle */
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

    );
    /* eslint-enable */
}