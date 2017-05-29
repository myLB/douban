<template>
  <div id="app">
    <!--<i class="start"></i>-->
    <div class="mm"></div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import './assets/js/common'
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  .start:before{
    content: '\f005';
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
  }
  .start:hover{
    color:green;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active,.fade-leave-active{
  transition: all .2s ease
}
.fade-enter,.fade-leave-active{
  opacity: 0;
}
</style>
