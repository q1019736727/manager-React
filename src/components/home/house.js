import React, {Component} from 'react'
import './style/house.scss'
import PageAction from "./pageAntion";
import {connect} from 'react-redux'
import {AddList,ReduceList} from '../../store/action/homeList'

@connect(
  state => ({
    tableDta: state.homelist.tableDta
  }),
  {
    AddList,
    ReduceList
  }
)
class House extends Component {
  state = {
    titles: ['公司', '项目', '房号', '联系人', '电话', '状态', '报修时间', '操作'],
  }
  componentDidMount(){

  }
  render() {
    return (
      <div id="house">
        <table>
          <thead>
            <tr>
              {this.state.titles.map((title, index) => {
                return (<th key={index}>{title}</th>)
              })}
            </tr>
          </thead>

          <tbody>
          {this.props.tableDta.map((data, index) => {
            return (
              <tr key={index}>
                {data.data.map((item, itemindex) => {
                  return (
                    <td key={index + '-' + itemindex}>{item}</td>
                  )
                })}
                <td>
                  <button onClick={this.props.AddList}>增加</button>
                  <button onClick={this.props.ReduceList}>删除</button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <PageAction></PageAction>
      </div>
    )
  }
}
export default House