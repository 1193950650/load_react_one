## react新路历程之环境搭建

   在现在的前端框架中，离不开各种环境和各种工具，那么react到底是需要一个什么样的环境呢？<br>
   在react中，环境搭建和vue类似，最快速的搭建环境方法都是通过脚手架来搭建，vue是vue-cli，react则是create-reactapp<br>
   在通过两个工具来创建项目之前，毋庸置疑你首先得有个node环境，有了node环境后我们才可以谈npm cnpm yarn 等包管理工具<br>

## 通过yarn来创建本地项目

   尽管我们在使用cnpm的时候，有遇到一些莫名其妙的错误，尤其是在生产环境中的时候，但是在本地环境，cnpm绝对是最好的选择<br>
   因为在我们学习的过程中，时间不应该浪费在包的下载上，而是实际的开发中。在react脚手架中，脚手架会默认去检查是否存在<br>
   yarn 如果存在则用yarn 不存在则会用npm来安装<br>

   `cnpm install -g create-react-app`<br>
   `cnpm install -g yarn`<br>
   `create-react-app load_react_one`<br>

   以上的命令会创建出一个完整的react项目。但是在react官网中，还有一种创建方式：<br>

   `npx create-react-app load_react_one`<br>

   这种创建方式相对于npm或者cnpm来说，首先简化了创建的命令，当然不止这一个好处，还有个特殊的地方在于，当创建完了后<br>
   脚手架 create-react-app 是会被自动删除的。<br>

## react组件
#### react属性绑定和循环渲染数据：<br>
   在react中,组件的写法由于是js和html混合着写，导致在html中的标签一些属性绑定的时候，和js的关键字有冲突。所以在做数据绑定<br>
   的时候，需要避开例如：<br>
   `class`<br>
   `style`<br>
   `for`<br>
   需要相应的换成：<br>
   `className`<br>
   `style={属性：值}`<br>
   `htmlFor`<br>

   在组件中，还有需要注意的是组件名首字母大写，类名首字母大写。<br>

#### react组件中的事件绑定：<br>
   在react组件中，事件绑定的使用方式是直接在jsx语法糖上增加一个属性：onClick 例如：<br>
   `<div onclick={this.run}></div>`<br>
   但是要注意的是在react组件中，由于是继承的原因，本身没有自己的this对象。所以方法里面直接使用this是无法指向组件的
   只有在组件中使用super方法将this指向到react后才可以使用，所以就产生了子组件里面方法解决this指向的3种方法：<br>
   ![](http://47.93.216.240/github/images/this(3).jpg)<br>
   ![](http://47.93.216.240/github/images/this(3).jpg)<br>
   ![](http://47.93.216.240/github/images/this(3).jpg)<br>
   在以上代码中不难看出，this都指向了我们的子组件方法里面，分别是通过bind 和 es6箭头函数来解决，bind又可以在constructor和<br>
   具体的html上直接bind。<br>



   ## 总结：

   无论是通过什么工具 只要是通过create-react-app 这个脚手架来创建的项目，目录结构基本都是<br>
   类似的，但是在运行的时候都得用 npm 或者 yarn<br>


   继续更新中...
