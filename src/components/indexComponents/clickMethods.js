import React from 'react'

class ClickMethods extends React.Component{
    constructor(){
        super()
        this.state = {
            run:'1',
            runTow:'2',
            runThree:'3'
        }
        this.run = this.run.bind(this)
    }
    run(){
        alert('这是点击的第一个')
        this.setState({
            runThree:'3'
        })
    }
    runTow(){
        alert('这是点击的第二个')
    }
    runThree=()=>{
        alert('这是点击的第三个')
        this.setState({
            runThree:'55555'
        })
    }
    render(){
        return (
            <div>
                <div onClick={this.run}>点击第一个--{this.state.run}</div>
                <br/>
                <div onClick={this.runTow.bind(this)}>点击第二个{this.state.runTow}</div>
                <br/>
                <div onClick={this.runThree}>点击第三个{this.state.runThree}</div>
                <br/>
            </div>
        )
    }
}

export default ClickMethods
