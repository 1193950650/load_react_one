import React from 'react'

class Top extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            key1:1,
            key2:2
        }
    }
    render() {
        return (
            <div>
                components tow {this.state.key1}
                <label htmlFor= "index">姓名：</label>
                <input id='index' />
            </div>
        )
    }
}

export default Top
