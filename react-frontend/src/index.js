//index.js

import EditItem from './components/EditItem';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';

ReactDOM.render(
  <Router>
      <div>
	    <Route path='/edit/:id' component={EditItem} />
        <Route exact path='/' component={App} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/index' component={IndexItem} />
      </div>
  </Router>,
  document.getElementById('root')
);