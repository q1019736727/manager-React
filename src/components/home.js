import React,{Component} from 'react'
import {Menu, Icon} from 'antd';
import {Route} from "react-router-dom";
import topNav from './home/topNav'
import buttomNav from './home/buttomNav'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class home extends Component{
    constructor(){
        super()
    }
    state = {
        seleName: topNav
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            seleName: buttomNav
        })
    }
    render(){
        return(
            <div>
                <Route obj={{name:'你好'}} component={this.state.seleName}></Route>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="1-9">Option 9</Menu.Item>
                        <Menu.Item key="1-10">Option 10</Menu.Item>
                        <Menu.Item key="1-11">Option 11</Menu.Item>
                        <Menu.Item key="1-12">Option 12</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="2-9">Option 9</Menu.Item>
                        <Menu.Item key="2-10">Option 10</Menu.Item>
                        <Menu.Item key="2-11">Option 11</Menu.Item>
                        <Menu.Item key="2-12">Option 12</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="3-9">Option 9</Menu.Item>
                        <Menu.Item key="3-10">Option 10</Menu.Item>
                        <Menu.Item key="3-11">Option 11</Menu.Item>
                        <Menu.Item key="3-12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
export default home