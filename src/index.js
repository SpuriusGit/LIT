import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  posts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'GET_POSTS':
        return {...state, posts: action.payload }
      case 'ADD_POST':
        return {...state, posts: [ ...state.posts,action.payload] }
      case 'DELETE_POST':
        return {...state, posts: state.posts.filter((post) =>  post.id !== action.payload) }
      default:
        return state

  }
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
