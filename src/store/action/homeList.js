import {ADD_LIST,REDUCE_LIST} from'../actionType'

export function AddList(options) {
  return (dispatch)=>{
    dispatch({
      type:ADD_LIST,
      payload:{
        data: ['我是新增的数据', '😃哈哈', '16-1-4-2', '时间的话', '15886432554', '处理处理', '2019-03-08 10:33:23']
      }
    })
  }
}

export function ReduceList() {
  return (dispatch)=>{
    dispatch({
      type: REDUCE_LIST,
      payload: {

      }
    })
  }
}