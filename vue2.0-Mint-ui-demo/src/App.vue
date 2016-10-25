<template>
  <div id="app">
    <router-link to="/home">
      <mt-button type="default" size="small">主页</mt-button> 
    </router-link>
    <router-link to="/other">
      <mt-button type="primary" size="small">其他功能</mt-button> 
    </router-link>
    <router-link to="/other2">
      <mt-button type="danger" size="small">其他功能</mt-button> 
    </router-link>
    
    <mt-header title="我是头部" fixed></mt-header>
    
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '这是数据'
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
        transition: all .5s ease-out;
    }
.fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translate3d(300px, 0, 0);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
