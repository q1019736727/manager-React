import {createStore,combineReducers,applyMiddleware} from 'redux'
import homelist from './reducer/homeList'
import slider from './reducer/slider'
import thunk from 'redux-thunk'

const _reducers = {
  homelist,
  slider
}
const reducers = combineReducers(_reducers)

/*使用异步必须配置thunk 例如Promise*/
let middlewares = [thunk]

let finalCreateStore = applyMiddleware(...middlewares)(createStore)

const store = finalCreateStore(reducers);

export default store

