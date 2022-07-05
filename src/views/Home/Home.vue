<template>
  <div>
    <!-- 头部 navbar搜索框 -->
    <van-nav-bar nav-bar-background-color="blue">
      <template #title>
        <h1>新闻大事件</h1>
      </template>
      <!-- <template #right>
        <van-icon name="search" size="18" />
      </template> -->
    </van-nav-bar>

    <!-- 分类 tabs-->
    <van-tabs v-model="active">
      <van-tab title="推荐">
        <Article-item :active="active"></Article-item>
      </van-tab>
      <van-tab title="娱乐"><Article-item :active="active"></Article-item></van-tab>
      <van-tab title="游戏"><Article-item :active="active"></Article-item></van-tab>
      <van-tab title="体育"><Article-item :active="active"></Article-item></van-tab>
    </van-tabs>

    <!-- 资讯列表 -->
  </div>
</template>


<script>
import ArticleItem from "@/components/ArticleItem";
export default {
  components: { ArticleItem },
  name: "Home",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang='less' scoped>
h1 {
  color: #fff;
  font-size: 14px;
}
/deep/ .van-nav-bar__content {
  background-color: #007bff;
}
.van-nav-bar .van-icon {
  color: #fff;
}
</style>