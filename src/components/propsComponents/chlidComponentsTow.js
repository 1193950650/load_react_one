import React from 'react'
export default class ChlidComponentsTow extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return (
      <div className='childComponentsOne'>
        {
          this.props.fatherTow?'没人发现我':'好的，终于有饭吃了！'
        }
      </div>
    )
  }
}