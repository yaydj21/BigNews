<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/user">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      active:0
    };
  },
};
</script>
<style lang="less">
</style>
