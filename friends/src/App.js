import React, { Component } from 'react';
import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import types from './constants';
import Friends from './components/Friends';

const customMiddlewareToSaveUserToke = store => next => action => {
  if(action.types === types.LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
}

const store = createStore(
  rootReducer, 
  {}, 
  compose(
    applyMiddleware(thunk, customMiddlewareToSaveUserToke, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Friends />
      </Provider>
    );
  }
}

export default App;
