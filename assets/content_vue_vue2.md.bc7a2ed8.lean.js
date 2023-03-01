import{_ as t,o as n,c,b as s,d as a,e as r,K as l,r as D,a as p,f as F}from"./app.ae5335d7.js";const k=JSON.parse('{"title":"笔记","description":"","frontmatter":{},"headers":[{"level":2,"title":"脚手架文件结构","slug":"脚手架文件结构","link":"#脚手架文件结构","children":[]},{"level":2,"title":"关于不同版本的 Vue","slug":"关于不同版本的-vue","link":"#关于不同版本的-vue","children":[]},{"level":2,"title":"vue.config.js 配置文件","slug":"vue-config-js-配置文件","link":"#vue-config-js-配置文件","children":[]},{"level":2,"title":"ref 属性","slug":"ref-属性","link":"#ref-属性","children":[]},{"level":2,"title":"props 配置项","slug":"props-配置项","link":"#props-配置项","children":[]},{"level":2,"title":"mixin(混入)","slug":"mixin-混入","link":"#mixin-混入","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]},{"level":2,"title":"scoped 样式","slug":"scoped-样式","link":"#scoped-样式","children":[]},{"level":2,"title":"总结 TodoList 案例","slug":"总结-todolist-案例","link":"#总结-todolist-案例","children":[]},{"level":2,"title":"webStorage","slug":"webstorage","link":"#webstorage","children":[]},{"level":2,"title":"组件的自定义事件","slug":"组件的自定义事件","link":"#组件的自定义事件","children":[]},{"level":2,"title":"全局事件总线（GlobalEventBus）","slug":"全局事件总线-globaleventbus","link":"#全局事件总线-globaleventbus","children":[]},{"level":2,"title":"消息订阅与发布（pubsub）","slug":"消息订阅与发布-pubsub","link":"#消息订阅与发布-pubsub","children":[]},{"level":2,"title":"nextTick","slug":"nexttick","link":"#nexttick","children":[]},{"level":2,"title":"Vue 封装的过度与动画","slug":"vue-封装的过度与动画","link":"#vue-封装的过度与动画","children":[]},{"level":2,"title":"vue 脚手架配置代理","slug":"vue-脚手架配置代理","link":"#vue-脚手架配置代理","children":[{"level":3,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":3,"title":"方法二","slug":"方法二","link":"#方法二","children":[]}]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[]},{"level":2,"title":"Vuex","slug":"vuex","link":"#vuex","children":[{"level":3,"title":"1.概念","slug":"_1-概念","link":"#_1-概念","children":[]},{"level":3,"title":"2.何时使用？","slug":"_2-何时使用","link":"#_2-何时使用","children":[]},{"level":3,"title":"3.搭建 vuex 环境","slug":"_3-搭建-vuex-环境","link":"#_3-搭建-vuex-环境","children":[]},{"level":3,"title":"4.基本使用","slug":"_4-基本使用","link":"#_4-基本使用","children":[]},{"level":3,"title":"5.getters 的使用","slug":"_5-getters-的使用","link":"#_5-getters-的使用","children":[]},{"level":3,"title":"6.四个 map 方法的使用","slug":"_6-四个-map-方法的使用","link":"#_6-四个-map-方法的使用","children":[]},{"level":3,"title":"7.模块化+命名空间","slug":"_7-模块化-命名空间","link":"#_7-模块化-命名空间","children":[]}]},{"level":2,"title":"路由","slug":"路由","link":"#路由","children":[{"level":3,"title":"1.基本使用","slug":"_1-基本使用","link":"#_1-基本使用","children":[]},{"level":3,"title":"2.几个注意点","slug":"_2-几个注意点","link":"#_2-几个注意点","children":[]},{"level":3,"title":"3.多级路由（多级路由）","slug":"_3-多级路由-多级路由","link":"#_3-多级路由-多级路由","children":[]},{"level":3,"title":"4.路由的 query 参数","slug":"_4-路由的-query-参数","link":"#_4-路由的-query-参数","children":[]},{"level":3,"title":"5.命名路由","slug":"_5-命名路由","link":"#_5-命名路由","children":[]},{"level":3,"title":"6.路由的 params 参数","slug":"_6-路由的-params-参数","link":"#_6-路由的-params-参数","children":[]},{"level":3,"title":"7.路由的 props 配置","slug":"_7-路由的-props-配置","link":"#_7-路由的-props-配置","children":[]},{"level":3,"title":"8.<router-link>的 replace 属性","slug":"_8-router-link-的-replace-属性","link":"#_8-router-link-的-replace-属性","children":[]},{"level":3,"title":"9.编程式路由导航","slug":"_9-编程式路由导航","link":"#_9-编程式路由导航","children":[]},{"level":3,"title":"10.缓存路由组件","slug":"_10-缓存路由组件","link":"#_10-缓存路由组件","children":[]},{"level":3,"title":"11.两个新的生命周期钩子","slug":"_11-两个新的生命周期钩子","link":"#_11-两个新的生命周期钩子","children":[]},{"level":3,"title":"12.路由守卫","slug":"_12-路由守卫","link":"#_12-路由守卫","children":[]},{"level":3,"title":"13.路由器的两种工作模式","slug":"_13-路由器的两种工作模式","link":"#_13-路由器的两种工作模式","children":[]}]}],"relativePath":"content/vue/vue2.md"}'),y={name:"content/vue/vue2.md"},i=p("",83),C=s("li",null,[s("p",null,"作用：让不展示的路由组件保持挂载，不被销毁。")],-1),A=s("p",null,"具体编码： 在 router-view 里面使用",-1),d=s("p",null,"注意 include 里面的名字是组件名",-1),u=s("p",null,"在动态组件 components 里面使用 import Home from '@/components/Home/Index' import Pano from '@/components/Pano/Pano'",-1),h=p("",8);function g(o,m,v,f,b,E){const e=F("router-view");return n(),c("div",null,[i,s("ol",null,[C,s("li",null,[A,(n(),a(l,{include:"News"},[r(e)],1024))])]),d,u,(n(),a(l,null,[(n(),a(D(o.currentTabComponent)))],1024)),h])}const _=t(y,[["render",g]]);export{k as __pageData,_ as default};
