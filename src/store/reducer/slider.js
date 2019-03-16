
export default function siler(state={name:'chiuyung',age:18},action) {
  switch (action.type) {
    case 'addAge':
      return {...state,age:state.age+action.payload}
    case 'reduceAge':
      return state
    default:
      return state
  }
}