<template>
  <div id="app">
    <comp-title-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import dragMixin from './mixin/drag-mixin'
import CompTitleBar from './components/common/comp-title-bar/comp-title-bar'
export default {
  name: 'mytools',
  mixins: [dragMixin],
  components: {
    'comp-title-bar': CompTitleBar
  }
}
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app {
  
}
</style>
