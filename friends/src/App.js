import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import styled from 'styled-components';

import rootReducer from './reducers';

import types from './constants';
import Friends from './components/Friends';
import Header from './components/Header';
import AddFriend from './components/AddFriend';



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

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Header />
            <Container>
              <Route exact path="/" component={Friends} />
              <Route path="/add" component={AddFriend} />
            </Container>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
