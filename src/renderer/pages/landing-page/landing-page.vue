<template>
  <div class="landing-page">
    <el-menu></el-menu>
  </div>
</template>

<script>
import { Menu, MenuItem } from 'element-ui'
import db from '../../../utils/data-store'
export default {
  name: 'landing-page',
  components: {
    'el-menu': Menu,
    'el-menu-item': MenuItem
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {
    setData () {
      db.set('user.name', '123').write()
    }
  }
}
</script>

<style lang="scss" scoped>
.landing-page {

}
</style>