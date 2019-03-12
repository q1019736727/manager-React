import React, {Component} from 'react'

class login extends React.Component {
  constructor(){
    super()

  }
  clickLogin() {
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        我是登录页面
        <button onClick={this.clickLogin}>点击登录</button>
      </div>
    )
  }
}

export default login