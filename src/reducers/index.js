import {combineReducers} from 'redux';
import initialState from '../store/initialState';

const messagesReducer = (state = initialState.messages, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const errorsReduce = (state = initialState.errors, action) => {
  switch (action.type) {
      default:
          return state;
  }
};

const userReducer = (state = initialState.errors, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    user: userReducer,
    messages: messagesReducer,
    errors: errorsReduce
})