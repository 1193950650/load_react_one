import React,{Component} from 'react'
import Top from '../../components/indexComponents/pageTop'
import ClickMethods from '../../components/indexComponents/clickMethods'
import ClickMethodsEvent from '../../components/indexComponents/clickMethodsEvent'
import MethodsForm from '../../components/indexComponents/methodsForm'
import TodoListReactComponents from '../../components/indexComponents/TodoListComponents'
import ComponentsMounted from '../../components/indexComponents/componentsAmount'
import Father from '../../components/propsComponents/father'
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
                <Top></Top>
                <ClickMethods></ClickMethods>
                <ClickMethodsEvent></ClickMethodsEvent>
                <MethodsForm></MethodsForm>
                {
                    this.state.dataList.map(function(value,key){
                        return <div key={key} title={value.name}><a href={value.age}>{value.name}</a></div>
                    })
                }

            <div className='header'></div>
                    <div>
                        <TodoListReactComponents></TodoListReactComponents>
                    </div>

                    <ComponentsMounted></ComponentsMounted>

                    <div className='header'>组件之间传值</div>
                    <Father></Father>
            </div>
        )
    }
}

export default Index
