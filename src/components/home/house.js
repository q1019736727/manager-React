import React, {Component} from 'react'
import './style/house.scss'
import PageAction from "./pageAntion";
export default class House extends Component {
  state = {
    titles: ['公司', '项目', '房号', '联系人', '电话', '状态', '报修时间', '操作'],
    tableDta: [
      {data: ['成都合达联行合达物业服务有限公司', '花语岸项目', '9-1-5-502', '李享', '15886432554', '待处理', '2019-03-08 10:33:23']},
      {data: ['贵阳和沐物业股份有限公司', '置信•国际社区', '9-1-5-502', '李享', '15886432554', '待处理', '2019-03-08 10:33:23']},
      {data: ['成都合达联行物业服务有限公司巴中分公司', '645项目', '15-2-2-4', '李可可', '15886432554', '待处理', '2019-03-08 10:33:23']},
      {data: ['成都合达联行物业服务有限公司巴中分公司', '逸景苑', '15-2-2-4', '李享', '15886432554', '待处理', '2019-03-08 10:33:23']},
      {data: ['成都合智商务服务有限公司彭州分公司', '置信•国际社区', '11-2-2-202', '李可可', '15886432554', '待处理', '2019-03-08 10:33:23']},
      {data: ['成都合达联行合达物业服务有限公司', '麓湖宫', '16-1-4-2', '李享', '15886432554', '待处理', '2019-03-08 10:33:23']},
      {data: ['成都合智商务服务有限公司彭州分公司', '逸景苑', '16-1-4-2', '李可可', '15886432554', '待处理', '2019-03-08 10:33:23']},
      {data: ['成都合智商务服务有限公司彭州分公司', '逸景苑', '16-1-4-2', '李可可', '15886432554', '待处理', '2019-03-08 10:33:23']},
    ]
  }

  addList() {

  }

  deleteRow() {

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
          {this.state.tableDta.map((data, index) => {
            return (
              <tr key={index}>
                {data.data.map((item, itemindex) => {
                  return (
                    <td key={index + '-' + itemindex}>{item}</td>
                  )
                })}
                <td>
                  <button onClick={this.addList}>增加</button>
                  <button onClick={this.deleteRow}>删除</button>
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