import React, {Component} from 'react'
import '../style/home.scss'

class topNav extends Component {
  render() {
    return (
      <div className="topNav">
        <span>后台管理系统</span>
        <div className="userInfo">
          <span>欢迎你</span>
          &emsp;<a>退出</a>
        </div>
      </div>
    )
  }
}

export default topNav