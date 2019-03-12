import React, {Component} from 'react';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
    constructor() {
        super()
    }
    handleClick = (e) => {
        console.log('click ', e);
    }
    render() {
        return (
            <div className="App">
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
        );
    }
}

export default App;
