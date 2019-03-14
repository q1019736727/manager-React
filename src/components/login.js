import React, {Component} from 'react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './style/login.scss'

class login extends React.Component {
  constructor() {
    super()

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: `/home`,
      //（在刷新页面的时候，参数丢失。）
      //数据未被加密
      query: {
        id: 133
      },
      //（在刷新页面的时候，参数丢失。）
      //数据加密了的
      state: {
        haha: 111
      }
    })
  }

  render() {
    return (
      <div id="Login">
        <div className="loginWrapper">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                     placeholder="Username"/>
            </Form.Item>
            <Form.Item>
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default login