import React from 'react'

class ClickMethodsEvent extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    clickEvent(event){
        console.log(event)
    }
    render(){
        return (
            <div>
                <div id='111111' onClick={this.clickEvent.bind(this)}>点击事件event</div>
            </div>
        )
    }
}

export default ClickMethodsEvent
