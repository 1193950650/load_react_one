import React from 'react'
import Components from '../../components/indexComponents/componentsAmounts'
export default class ComponentsAmount extends React.Component{
    constructor(){
      super()
      this.state = {
        num:0
      }
    }
    componentWillMount(){
       console.log('1.组件挂在之前！') 
    }
    shouldComponentUpdate(){
      console.log('4.组件是否需要更新')
      if(this.state.num%3 === 0){
        return true
      }else{
        return false
      }
    }
    componentWillUpdate(){
       console.log('5.组件更新之前') 
    }
    componentDidUpdate(){
      console.log('6.组件更新完成')
    }
    handelChange=()=>{
      this.setState({
        num:this.state.num + 1
      })
    }
    render(){
      console.log('2.组件挂载！') 
      return (
        <div>
          <div>
            {this.state.num}
          </div>
          <button onClick={this.handelChange}>+</button>
          <Components num={this.state.num}></Components>
        </div>
      )
    }
    componentDidMount(){
      console.log('3.组件挂载完成！') 
    }
}

