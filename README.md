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

## 总结：

   无论是通过什么工具 只要是通过create-react-app 这个脚手架来创建的项目，目录结构基本都是
   类似的，但是在运行的时候都得用 npm 或者 yarn
