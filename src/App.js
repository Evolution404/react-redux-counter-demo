import {connect} from 'react-redux'
import {add, minus} from './actions/action'
import Counter from './component/counter'

// 将store转换为要连接的组件的props
// 是一个函数, 参数就是当前state
const mapStateToProps = state => {
  return {
    value: state
  }
}

// 将dispatch转换为要连接的组件的props
// 是一个函数
const mapDispatchToprops = dispatch => {
  return {
    add: ()=>{dispatch(add())},
    minus: ()=>{dispatch(minus())},
  }
}

export default 
  connect(mapStateToProps, mapDispatchToprops)(Counter)
