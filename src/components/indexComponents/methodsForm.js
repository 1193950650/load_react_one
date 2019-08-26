import React, { Component } from 'react'
export default class MethodsForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            from:{
                name:'',
                sex:'',
                phone:'',
                idCard:'',
                message:''
            }
        }
    }
    nameChange=(event)=>{
        let newForm = this.state.from
        newForm.name = event.target.value
        this.setState({
            from:newForm
        })
    }
    getFormValue=()=>{
        console.log(this.state.from)
    }
    render() {
        return (
            <div className='reactForm'>
                <form>
                    <label htmlFor='name'>用户名：</label>
                    <input id='name' value={this.state.name} onChange={this.nameChange}></input>

                    <input type='radio' name='aaa' value='1'></input>
                    <input type='radio' name='aaa' value='2'></input>

                </form>     

                <button onClick={this.getFormValue}>获取表单改变的值</button>      
            </div>
        )
    }
}
