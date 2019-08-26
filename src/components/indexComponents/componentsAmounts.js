import React from 'react'

export default class Components extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  componentWillReceiveProps(){
    console.log('----子组件：props发生改变')
  }
  shouldComponentUpdate(newProps,newState){
    console.log('----子组件：是否更新子组件')
    if(newProps.num%1 === 0){
      return true
    }else{
      return false
    } 
  }
  componentWillUpdate(){
    console.log('----子组件：props将被更新')
  }
  componentDidUpdate(){
    console.log('----子组件：props将被更新完成')
  }
  componentWillMount() {
   console.log('----子组件：挂载之前') 
  }
  componentDidMount() {
    console.log('----子组件：挂载完成')
  }
  render(){
    console.log('----子组件：挂载中。。。')
    return (
      <div>
        {this.props.num}
      </div>
    )
  }
}