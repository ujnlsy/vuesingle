import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import components from './views/components/components.vue'
import guide from './views/components/guide.vue'

//开启debug模式
Vue.config.debug = true;

// new Vue(app);//这是上一篇用到的，新建一个vue实例，现在使用vue-router就不需要了。
// 路由器需要一个根组件。
// var App = Vue.extend({});

// 创建一个路由器实例
var router = new VueRouter();

router.map({//定义路由映射
    '/index':{//访问地址
        name:'index',//定义路由的名字。方便使用。
        component:guide,//引用的组件名称，对应上面使用`import`导入的组件
        //component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观
    },
    '/components': {
        name:'components',
        component: components
    }
});
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*':"/index"//重定向任意未匹配路径到/index
});

router.start(App, 'app')