import React from 'react'

export default class childComponentsOne extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div className='childComponentsOne'>
         {this.props.fatherValue || '等待父组件传参'} 
         <button onClick={this.props.father.shutDown}>{this.props.father.state.canClickButton?'闭嘴！我不需要你的参数':'算了我你还是传参吧'}</button>
         <button onClick={this.props.father.changeChlidComponentsTow}>下面个组件回家吃饭了</button>
      </div>  
    )
  }
}