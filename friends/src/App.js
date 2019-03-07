import React, { Component } from 'react';
import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import types from './constants';

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
    applyMiddleware(thunk, customMiddlewareToSaveUserToke),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>hi</div>y
      </Provider>
    );
  }
}

export default App;
