<template>
  <div class="top">
    <mu-bottom-nav @change="change" :value.sync="tab" color="red">
      <!--绑定:value.sync跳转页面-->
      <mu-bottom-nav-item value="home" title="首页" icon="home"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="account" title="上传" icon="video_call"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="myview" title="我的" icon="perm_identity"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: 'home'
      }
    },
    methods: {
      change(val) {
        this.$router.push(val)
      }
    }
  }
</script>

<style scoped>
  .top{
    box-shadow: 0 0 4px 2px rgb(208, 208, 208);
  }
</style>
