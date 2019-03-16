import React, {Component} from 'react'
import '../style/home.scss'
import {connect} from 'react-redux'
import silder from "../../store/reducer/slider";

class topNav extends Component {
  constructor(props){
    super(props)
  }
  backLogin(){
    this.props.history.push({
      pathname:'/'
    })
  }
  addAge(){
    this.props.add(10)
  }
  render() {
    return (
      <div className="topNav">
        <span>后台管理系统</span>
        <span>年龄{this.props.userInfo.age}<button onClick={this.addAge.bind(this)} style={{width:'50px'}}>+</button></span>
        <div className="userInfo">
          <span>欢迎你{this.props.userInfo.name}</span>
          &emsp;<a onClick={this.backLogin.bind(this)}>退出</a>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    userInfo:{...state.slider}
  }
}
function mapDispatchToProps(dispatch) {
  return{
    add:(age)=>dispatch({type:'addAge',payload:age})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(topNav)
