<script type="text/babel">
/**
 * Created by lsy on 16/9/7.
 */
    import Vue from 'vue'
    const HeaderCpt = Vue.extend({
        
    });
    Vue.component('HeaderCpt', HeaderCpt);
    export default HeaderCpt
</script>
<template>
    <div class="header-cpt">
        <a id="logo" href="https://vuejs.org" target="_blank">
            <img src="/src/assets/img/logo.png"/>
            <span>Components of Vue.js</span>
        </a>
        <div id="nav">
            <div v-link="{ name: 'index' }">首页</div>
            <div v-link="{ name: 'components' }">组件</div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .header-cpt{
        background: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        padding: 25px 60px;
        position: relative;
        z-index: 2;
        #logo{
            display: inline-block;
            line-height: 40px;
            font-size: 14px;
            color: #2c3e50;
            font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
            font-weight: 500;
            img{
                margin-right: 6px;
                width: 40px;
                height: 40px;
            }
        }
    }
</style>