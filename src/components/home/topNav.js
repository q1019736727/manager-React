import React, {Component} from 'react'
import '../style/home.scss'

class topNav extends Component {
  backLogin(){
    console.log(this.props)
    // this.props.history.push({
    //   pathname:'/'
    // })
  }
  render() {
    return (
      <div className="topNav">
        <span>后台管理系统</span>
        <div className="userInfo">
          <span>欢迎你</span>
          &emsp;<a onClick={this.backLogin.bind(this)}>退出</a>
        </div>
      </div>
    )
  }
}

export default topNav