## 下载启动

执行以下命令
```shell
  git clone https://github.com/Evolution404/react-redux-counter-demo.git
  cd react-redux-counter-demo
  npm install
  npm start
```

## 目录解释
component/counter.js 是展示组件</br>
App.js 是容器组件</br>
actions/action.js定义了两个动作`add`和`minus`</br>
reducers/index.js定义了接收到动作后的操作</br>
index.js创建全局store使用Provider包裹App组件将其渲染到dom</br>

## connect函数
将**展示组件与容器组件**进行连接</br>
connect函数是一个高阶函数, 返回值也是一个函数</br>
返回函数传入展示组件后返回容器组件</br>

```javascript
connect(mapStateToProps, mapDispatchToprops)(Counter)
```
这句代码将`Counter`组件进行了包装, 返回的新组件就是容器组件


### mapStateToProps
从字面上理解将state向props进行映射
本质上是一个接收store返回一个对象的函数
这个返回的对象是展示组件的props的一部分
mapStateToProps主要用于普通数据的传递

### mapDispatchToprops
将dispatch向props进行映射
本质也是一个函数, 参数是dispatch, 返回一个对象
这个返回的对象同样成为展示组件的props的一部分
最终的展示组件的props就是两者进行组合的结果
mapDispatchToprops主要用于回调函数的传递, 这个函数一般会发送action

