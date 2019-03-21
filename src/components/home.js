import React, {Component} from 'react'
import {Menu, Icon} from 'antd';
import {Route,Switch,Redirect,Link} from "react-router-dom";
import TopNav from './home/topNav'
import './style/home.scss'
import House from './home/house'
import Bind from './home/building'
import {connect} from 'react-redux'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@connect(
  state=>({
    /*这里的数据都将以props的形式传给组件*/
    menuList:state.homelist.menus,
    userInfo:{...state.slider}
  }),
  {

  }
)
class home extends Component {
  constructor() {
    super()
  }
  componentWillMount(){
    console.log(this.props.menuLists)
  }

  state = {
    countNum: 0,
  }
  handleClick = (e) => {
    this.setState({
      countNum: this.state.countNum + 1
    })
    //不用push而用replace是为了防止产生死循环
    if (this.state.countNum%2===0) {
      this.props.history.replace({
        pathname:'/home/house'
      })
    }else {
      this.props.history.replace({
        pathname:'/home/bind'
      })
    }

  }

  render() {
    return (
      <div>
        {/*//注意一下两种写法*/}

        {/*这里如果只是单纯引入TopNav组件,那么在在TopNav组件中是无法拿到路由的*/}
        {/*<TopNav></TopNav>*/}

        {/*只有通过这种方式以Route形式才能拿到路由,及在TopNav组件中能拿到this.props.history*/}
        {/*<Route component={TopNav}></Route>*/}

        {/*多级套用并且还要传递数据,拿取路由*/}
        <Route render={props => <TopNav {...props} handleAction={(msg)=>{ alert(msg) }} name='哈哈哈😄'/>}></Route>
        {this.props.userInfo.age}
        <div className='homeWrapper'>
          <div className='menuWrapper'>
            <Menu
              className='sliderBar'
              onClick={this.handleClick}
              style={{width: 256}}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              {this.props.menuList.map((item, index) => {
                return (<SubMenu key={index} title={<span><Icon type="setting"/><span>{item.title}</span></span>}>
                  {item.menus.map((menu, menuIndx) => {
                    return(
                      <Menu.Item key={index + '-' + menuIndx}>{menu}</Menu.Item>
                    )
                  })}
                </SubMenu>)
              })}
            </Menu>
          </div>
          <div className='detailPage'>
            <Switch>
              /*重定向*/
              <Redirect exact path="/home" to="/home/house"></Redirect>
              <Route path={'/home/house'} component={House}></Route>
              <Route path={'/home/bind'} component={Bind}></Route>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
// function mapStateToProps(state) {
//   return {
//     menuList:state.homelist,
//     userInfo:{...state.slider}
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return{
//     add:(age)=>dispatch({type:'haha',payload:age})
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(home)

export default home

