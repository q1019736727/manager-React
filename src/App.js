import React, {Component} from 'react';
//router
import {BrowserRouter as Router, HashRouter, Route} from "react-router-dom";
import routes from './router'
import Login from './components/login'
import Home from './components/home'

class App extends Component {
  constructor() {
    super()
  }

  gohome() {
    this.props.history.push('/home')
  }

  render() {
    return (
      /*这里的一定要bind this，不然click的时候this会指向undefined*/
      <div onClick={this.gohome.bind(this)}>
        首页
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
          {/*<Route exact path="/" component={App}></Route>*/}
          <Route exact path='/' component={Login}></Route>
          <Route path='/home/:id' component={Home}>

          </Route>
        </div>
      </HashRouter>
    )
  }
}