## react新路历程之环境搭建

   在现在的前端框架中，离不开各种环境和各种工具，那么react到底是需要一个什么样的环境呢？
   在react中，环境搭建和vue类似，最快速的搭建环境方法都是通过脚手架来搭建，vue是vue-cli，react则是create-reactapp
   在通过两个工具来创建项目之前，毋庸置疑你首先得有个node环境，有了node环境后我们才可以谈npm cnpm yarn 等包管理工具

## 通过yarn来创建本地项目

   尽管我们在使用cnpm的时候，有遇到一些莫名其妙的错误，尤其是在生产环境中的时候，但是在本地环境，cnpm绝对是最好的选择
   因为在我们学习的过程中，时间不应该浪费在包的下载上，而是实际的开发中。在react脚手架中，脚手架会默认去检查是否存在
   yarn 如果存在则用yarn 不存在则会用npm来安装

   `cnpm install -g create-react-app`
   `cnpm install -g yarn`
   `create-react-app load_react_one`

   以上的命令会创建出一个完整的react项目。但是在react官网中，还有一种创建方式：

   `npx create-react-app load_react_one`

   这种创建方式相对于npm或者cnpm来说，首先简化了创建的命令，当然不止这一个好处，还有个特殊的地方在于，当创建完了后
   脚手架 create-react-app 是会被自动删除的。

## react组件
#### react属性绑定和循环渲染数据：
   在react中,组件的写法由于是js和html混合着写，导致在html中的标签一些属性绑定的时候，和js的关键字有冲突。所以在做数据绑定
   的时候，需要避开例如：  
   `class`   
   `style`  
   `for`  
   需要相应的换成：  
   `className`  
   `style={属性：值}`  
   `htmlFor`  

   在组件中，还有需要注意的是组件名首字母大写，类名首字母大写。  

#### react组件中的事件绑定：
   在react组件中，事件绑定的使用方式是直接在jsx语法糖上增加一个属性：onClick 例如：  
   `<div onclick={this.run}></div>`  
   但是要注意的是在react组件中，由于是继承的原因，本身没有自己的this对象。所以方法里面直接使用this是无法指向组件的  
   只有在组件中使用super方法将this指向到react后才可以使用，所以就产生了子组件里面方法解决this指向的3种方法：  
   `import React from 'react'  
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

   export default ClickMethods`  
   在以上代码中不难看出，this都指向了我们的子组件方法里面，分别是通过bind 和 es6箭头函数来解决，bind又可以在constructor和
   具体的html上直接bind。



   ## 总结：

   无论是通过什么工具 只要是通过create-react-app 这个脚手架来创建的项目，目录结构基本都是
   类似的，但是在运行的时候都得用 npm 或者 yarn


   继续更新中...
