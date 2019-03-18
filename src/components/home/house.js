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
  addListitem(){
    this.props.AddList({
      data: ['我是新增的数据', '😃哈哈', '16-1-4-2', '时间的话', '15886432554', '处理处理', '2019-03-08 10:33:23']
    })
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
                  <button onClick={this.addListitem.bind(this)}>增加</button>
                  <button onClick={ () => this.props.ReduceList(index) }>删除</button>
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