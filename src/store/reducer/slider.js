import {ADD_AGE,REDUCE_AGE} from '../actionType'

export default function siler(state={name:'chiuyung',age:18},action) {
  switch (action.type) {
    case ADD_AGE:
      return {...state,age:state.age+action.payload}
    case REDUCE_AGE:
      return {...state,age:state.age-action.payload}
    default:
      return state
  }
}