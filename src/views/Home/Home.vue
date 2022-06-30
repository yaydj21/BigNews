<template>
  <div>
    <!-- 头部 navbar搜索框 -->
    <van-nav-bar nav-bar-background-color="blue">
      <template #left>
        <!-- <img src="@/imgs/toutiao_logo.png" alt="" class="logo" /> -->
      </template>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 分类 tabs-->
    <van-tabs v-model="active">
      <van-tab title="推荐">
        <Article-item></Article-item>
        </van-tab>
      <van-tab title="计算机原理">计算机原理</van-tab>
      <van-tab title="数据结构">数据结构</van-tab>
      <van-tab title="数据库">数据库</van-tab>
    </van-tabs>

    <!-- 资讯列表 -->

  </div>
</template>


<script>
import ArticleItem from '@/components/ArticleItem';
export default {
  components: { ArticleItem },
  name: "Home",
  data(){
    return{
      active:0
    }
  }
};
</script>

<style lang='less' scoped>
.logo {
  height: 80%;
}
/deep/ .van-nav-bar__content {
  background-color: #007bff;
}
.van-nav-bar .van-icon {
  color: #fff;
}
</style>