import React, {Component} from 'react'
import {Menu, Icon} from 'antd';
import {Route,Switch,Redirect,Link} from "react-router-dom";
import TopNav from './home/topNav'
import './style/home.scss'
import House from './home/house'
import Bind from './home/building'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class home extends Component {
  constructor() {
    super()
  }
  componentDidMount(){
    console.log(this.props.location)
    console.log(this.props.match)

  }
  state = {
    menuList: [
      {title: '停车缴费管理', menus: ['缴费订单', '结算商户设置']},
      {title: '停前端显示配置', menus: ['Banner配置', '公告管理']},
      {title: '商户管理', menus: ['客户绑定信息审核', '客户信息管理']},
      {title: '物业单据管理', menus: ['保修单', '投诉建议单', '物业缴费订单', '注册数据统计', '绑定数据统计']},
      {title: '物业基础信息管理', menus: ['公司信息维护', '项目信息维护', '小区信息维护', '初始数据配置', '单元信息维护', '收房信息管理', '车位管理']},
      {title: '全域生活方式', menus: ['活动管理', '订单管理', '退款单管理', '城市站点管理']},
      {title: '营销活动管理', menus: ['推广拉新', '金像奖']},
      {title: '会员信息管理', menus: ['会员列表', '身份认证审核']},
      {title: '积分管理', menus: ['积分任务配置', '消费返积分配置', '积分清单', '积分成本核算']},
      {title: '优惠券管理', menus: ['优惠券列表', '优惠券礼包列表']},
      {title: '用户管理', menus: ['用户管理', '资源管理', '角色管理', '授权管理']},
      {title: '系统配置', menus: ['系统参数维护', '短信模版']},
    ],
  }
  handleClick = (e) => {
    console.log('click ', e);
    //不用push而用replace是为了防止产生死循环
    if ((e.keyPath[1])%2===0) {
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
        <TopNav></TopNav>
        <div className='homeWrapper'>
          <Menu
            className='sliderBar'
            onClick={this.handleClick}
            style={{width: 256}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            {this.state.menuList.map((item, index) => {
              return (<SubMenu key={index} title={<span><Icon type="setting"/><span>{item.title}</span></span>}>
                {item.menus.map((menu, menuIndx) => {
                  return(
                    <Menu.Item key={index + '-' + menuIndx}>{menu}</Menu.Item>
                  )
                })}
              </SubMenu>)
            })}
          </Menu>
          <Route path={'/home/house'} component={House}></Route>
          <Route path={'/home/bind'} component={Bind}></Route>
        </div>
      </div>
    )
  }
}

export default home