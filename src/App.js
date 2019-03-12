import React, {Component} from 'react';
//router
import {BrowserRouter as Router,HashRouter, Route} from "react-router-dom";
import routes from './router'
import Login from './components/login'
import Home from './components/home'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        首页
        {this.props.children}
      </div>
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      /*这里的 exact 要加上，不然切换有问题*/
      <HashRouter>
        <div>
          <Route exact path="/" component={App}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
        </div>
      </HashRouter>
    )
  }
}