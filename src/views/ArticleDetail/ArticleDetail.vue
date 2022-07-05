<template>
  <div>
    <van-nav-bar title="文章详情" left-arrow @click-left="$router.back()" />
    <div class="article-container">
      <!-- 标题 -->
      <h1 class="art-title">{{ title }}</h1>

      <!-- 用户信息 -->
      <van-cell center :title="aut_name" :label="pubdate">
        <template #icon>
          <!-- 头像 -->
          <img :src="aut_photo" alt="" class="avatar" />
        </template>
      </van-cell>

      <!-- 分割线 -->
      <van-divider></van-divider>

      <!-- 文章内容 -->
      <!-- 在 ArticleDetail.vue 组件刚加载时，如果网速较慢，则 data 中的 article 等于 null。为了防止 DOM 闪烁的问题，可以为文章信息区域的 div 应用 v-if 指令： -->
      <div class="art-content" v-if="content" v-html="content">文章内容</div>

      <!-- 分割线 -->
      <van-divider>End</van-divider>
    </div>
  </div>
</template>

<script>
import {
  getArticleDetailAPI,
  getFunArticleDetailAPI,
  getGameArticleDetailAPI,
  getSportsArticleDetailAPI,
} from "@/api/articleAPI";
export default {
  name: "ArticleDetail",
  props: ["id"],
  data() {
    return {
      articlesArr: [],
      title: "",
      aut_name: "",
      aut_photo: "",
      content: "",
      pubdate: "",
    };
  },
  methods: {
    async initArticle() {
      // 通过路由传过来的值 判断是tab是哪个类型 初始化对应的数据
      if (this.$route.query.name === "article") {
        const data = await getArticleDetailAPI(this.id);
        this.dataOk(data);
      }
      if (this.$route.query.name === "funArticle") {
        const data = await getFunArticleDetailAPI(this.id);
        this.dataOk(data);
      }
      if (this.$route.query.name === "GameArticle") {
        const data = await getGameArticleDetailAPI(this.id);
        this.dataOk(data);
      }
      if (this.$route.query.name === "sportsArticle") {
        const data = await getSportsArticleDetailAPI(this.id);
        this.dataOk(data);
      }
    },
    dataOk(data) {
      if (data.data.message == "ok") {
        this.title = data.data.data[0].title;
        this.aut_name = data.data.data[0].aut_name;
        this.aut_photo = data.data.data[0].aut_photo;
        this.content = data.data.data[0].content;
        this.pubdate = data.data.data[0].pubdate;
      }
    },
  },
  created() {
    this.initArticle();
  },
};
</script>

<style lang="less" scoped>
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 10px;
}
.art-content {
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  overflow-x: scroll;
  word-break: break-all;
}
.van-cell {
  padding: 5px 10px;
  &::after {
    display: none;
  }
}
.art-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  padding-left: 10px;
}

.art-content {
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  overflow-x: scroll;
  word-break: break-all;
}

.van-cell {
  padding: 5px 0;
  &::after {
    display: none;
  }
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-right: 5px;
  border: none;
}

.like-box {
  display: flex;
  justify-content: center;
}

/deep/ .van-nav-bar__content {
  background-color: #007bff;
  .van-nav-bar__title {
    color: #fff;
  }
}
/deep/ .van-nav-bar .van-icon {
  color: #fff;
}
</style>