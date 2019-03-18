import {ADD_LIST,REDUCE_LIST} from'../actionType'

export function AddList(options) {
  return (dispatch)=>{
    dispatch({
      type:ADD_LIST,
      payload:options
    })
  }
}

export function ReduceList(index) {
  return (dispatch)=>{
    dispatch({
      type: REDUCE_LIST,
      payload: index
    })
  }
}