import React, {Component} from 'react';
//router
import {BrowserRouter as Router, HashRouter, Route} from "react-router-dom";
import routes from './router'
import Login from './components/login'
import Home from './components/home'
import {Provider} from 'react-redux'
import store from './store'


export default class App extends Component {
  render() {
    return (
      /*这里的 exact 要加上，不然切换有问题*/
      <Provider store={store}>
        <HashRouter>
          <div>
            <Route exact path='/' component={Login}></Route>
            <Route path='/home' component={Home}></Route>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}