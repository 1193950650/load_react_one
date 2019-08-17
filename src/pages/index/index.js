import React,{Component} from 'react'

class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'111111',
            age:'女',
            dataList:[
                {
                    name:'1111',
                    age:'22222'
                },
                {
                    name:'1111',
                    age:'22222'
                },
                {
                    name:'1111',
                    age:'22222'
                },
                {
                    name:'1111',
                    age:'22222'
                }
            ]
        }
    }
    render(){
        return(
            <div className={'react'}>
                {
                    this.state.dataList.map(function(value,key){
                        return <div key={key} title={value.name}><a href={value.age}>{value.name}</a></div>
                    })
                }
            </div>
        )
    }
}

export default Index
