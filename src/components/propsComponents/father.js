import React from 'react'
import '../../asstes/style/propsComponents/father.scss'
import ChlidComponentsOne from './childComponentsOne'
import ChlidComponentsTow from './chlidComponentsTow'
export default class FatherComponents extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      onComponentsProps:'',
      canClickButton:true,
      fatherTow:true
    }
  }
  handleChange=(e)=>{
    let inputChangeValue = e.target.value
    let {onComponentsProps} = this.state
    if(inputChangeValue === ''){
      onComponentsProps = null
    }
    this.setState({
      inputValue:inputChangeValue,
      onComponentsProps:onComponentsProps
    })
  }
  fatherStartProps=()=>{
    this.setState({
      onComponentsProps:this.state.inputValue
    })
  }
  shutDown=(parmars)=>{
    this.setState({
      canClickButton:!this.state.canClickButton
    })
  }
  changeChlidComponentsTow=()=>{
    this.setState({
      fatherTow:!this.state.fatherTow
    })
  }
  render(){
    return (
      <div className='father'>
        这里是父组件
        <label htmlFor='fatherId'>请输入需要给子组件传递的参数：</label>
        <input id='fatherId' value={this.state.inputValue} onChange={this.handleChange}></input>
        {
          this.state.canClickButton?
            <button onClick={this.fatherStartProps}>开始传递</button> 
            :''
        }
        <ChlidComponentsOne fatherValue={this.state.onComponentsProps} father={this}></ChlidComponentsOne>
        <ChlidComponentsTow fatherTow={this.state.fatherTow}></ChlidComponentsTow>
      </div>
    )
  }
}