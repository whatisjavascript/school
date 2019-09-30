<template>
  <div class="comp-title-bar">
    <span>MYTOOLS</span>
    <div class="title-bar-ctrls">
      <button class="title-bar-ctrls-btn iconfont icon-minimize" @click="onMinimize"></button>
      <button class="title-bar-ctrls-btn iconfont icon-close" @click="onClose"></button>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'comp-title-bar',
  methods: {
    onMinimize () {
      ipcRenderer.send('minimize')
    },
    onClose () {
      this.$electron.remote.app.quit()
    }
  }
}
</script>

<style lang="scss" scoped>
.comp-title-bar {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  font-size: 14px;
  color: #ccc;
  background-color: #3c3c3c;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  & > span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    line-height: 30px;
  }
  .title-bar-ctrls {
    display: flex;
    flex-direction: row;
    align-items: center;
    -webkit-app-region: no-drag;
    &-btn {
      width: 46px;
      height: 30px;
      font-size: 14px;
      color: #8e8e8e;
      background-color: transparent;
      border: none;
      outline: none;
      &:hover {
        color: #ccc;
        background-color: #505050;
      }
      &.icon-close:hover {
        color: #fff;
        background-color: #d71525;
      }
    }
  }
}
</style>