import React, { Component } from 'react';
import '../../asstes/style/indexComponentsStyle/TodoListComponents.scss'
export default class TodoListComponents extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
        this.state={
            userInfoList:[],
            form:{
                userName:'',
                homeAdress:''
            },
            deleteUserInfoList:[]
        }
    }
    setUserName=(e)=>{
       let userNameForm = this.state.form
       userNameForm.userName = e.target.value
       this.setState({
           form:userNameForm
       })     
    }
    setHomeAdress=(e)=>{
        let homeAdressForm = this.state.form
        homeAdressForm.homeAdress = e.target.value
        this.setState({
            form:homeAdressForm
        })     
     }
     addUserAdress=()=>{
        let newUserInfoList = this.state.userInfoList
        newUserInfoList.unshift(JSON.parse(JSON.stringify(this.state.form)))
        this.setState({
            userInfoList:newUserInfoList
        })
     }
     deleteUserInfo=(key)=>{
        let newDeleteUserInfo = this.state.deleteUserInfoList
        let newUserInfoList = this.state.userInfoList
        newDeleteUserInfo.unshift(newUserInfoList[key])
        newUserInfoList.splice(key,1)
        this.setState({
            userInfoList:newUserInfoList,
            deleteUserInfoList:newDeleteUserInfo
        })
     }
     deleteUserInfoRely=(key)=>{
        let newDeleteUserInfo = this.state.deleteUserInfoList
        newDeleteUserInfo.splice(key,1)
        this.setState({
            deleteUserInfoList:newDeleteUserInfo
        })
     }
    render() {
        return (
            <div className='userInfoTodoList'>
                <div>
                   <div className='items'>
                        <label htmlFor='userName'>姓名：</label>
                        <input id='userName' type='text' value={this.state.form.userName} onChange={this.setUserName}></input>
                   </div>
                   <div className='items'>
                        <label htmlFor='homeAdress'>收货地址：</label>
                        <input id='homeAdress' type='text' value={this.state.form.homeAdress} onChange={this.setHomeAdress}></input>
                   </div>
                   <div className='addUserAdress' onClick={this.addUserAdress}>添加收货地址</div>
                </div>
                <div>
                    <div>
                        <div className='titleName'>以添加收货地址（{this.state.userInfoList.length}）</div>
                        <ul>
                            {
                                // eslint-disable-next-line array-callback-return
                                this.state.userInfoList.map((value,key)=>{
                                     return (
                                         <li key={key}>
                                             <span>{value.userName}</span>
                                             <span>{value.homeAdress}</span>
                                             <span onClick={this.deleteUserInfo.bind(this,key)}>删除</span>
                                         </li>
                                     )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <div className='titleName'>以删除收货地址（{this.state.deleteUserInfoList.length}）</div>
                        <ul>
                            {
                                // eslint-disable-next-line array-callback-return
                                this.state.deleteUserInfoList.map((value,key)=>{
                                     return (
                                         <li key={key}>
                                             <span>{value.userName}</span>
                                             <span>{value.homeAdress}</span>
                                             <span onClick={this.deleteUserInfoRely.bind(this,key)}>删除</span>
                                         </li>
                                     )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}