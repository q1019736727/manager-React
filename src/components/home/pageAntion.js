import React,{Component} from 'react'
import './style/pageaction.scss'
export default class PageAction extends Component{
  state = {
    pageNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    currentIndex: 0,//当前选中状态
    currentPage: 1,//当前页码
  }
  clickPage(ele) {
    let index = parseInt(ele.currentTarget.innerHTML) - 1
    let value = parseInt(ele.currentTarget.innerHTML)
    if (value >= 6) {
      let pageArr = JSON.parse(JSON.stringify(this.state.pageNums))
      pageArr.splice(0,10)
      this.setState({
        pageNums: pageArr,
        currentIndex: 5
      })
      let num = -1
      while (num<9){
        num++
        this.state.pageNums[num] = value-(5-num)
        let pageArr = JSON.parse(JSON.stringify(this.state.pageNums))
        pageArr[num] = value-(5-num)
        this.setState({
          pageNums: pageArr
        })
      }
    } else {
      this.setState({
        currentIndex: index
      })
    }
  }
  //下一页
  nextAction() {
    let pageArr = JSON.parse(JSON.stringify(this.state.pageNums))
    pageArr.splice(10, 0, (pageArr[9] + 1))
    pageArr.splice(0, 1)
    this.setState({
      pageNums: pageArr,
    })
  }
  //上一页
  preAction() {
    let pageArr = JSON.parse(JSON.stringify(this.state.pageNums))
    if (pageArr[0] === 1) return
    pageArr.splice(0, 0, (pageArr[0] - 1))
    pageArr.splice(10, 1)
    this.setState({
      pageNums: pageArr,
      currentIndex: 0
    })
  }
  //首页
  topAction(){
    this.setState({
      pageNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentIndex: 0
    })
  }
  render(){
    return(
      <div id="pageination">
        <span onClick={this.topAction.bind(this)}>{'<<'}</span>
        <span onClick={this.preAction.bind(this)}>{'<'}</span>
        {this.state.pageNums.map((item, index) => {
          return (
            <button onClick={this.clickPage.bind(this)}
                    key={index}
                    className={this.state.currentIndex === index ? "activity":""}>
              {item}
            </button>)
        })}
        <span onClick={this.nextAction.bind(this)}>{'>'}</span>
        <span>{'>>'}</span>
       </div>
    )
  }
}