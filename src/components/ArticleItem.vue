<template>
  <div>
    <van-cell
      center
      v-for="item in NewsArr"
      :key="item.id"
      @click="showArticleDeatail(item.id)"
    >
      <van-cell :title="item.title" />
      <div class="imgsbox">
        <img :src="item.img_url" alt="" />
        <img :src="item.img_url" alt="" />
        <img :src="item.img_url" alt="" />
      </div>
      <van-cell :title="item.time" />
    </van-cell>
  </div>
</template>

<script>
import {
  getNewsAPI,
  getFunNewsAPI,
  getGameNewsAPI,
  getSportsNewsAPI,
} from "@/api/NewsApi";
export default {
  props: ["active"],
  name: "ArticleItem",
  data() {
    return {
      NewsArr: [],
    };
  },
  created() {
    this.initNews();
  },
  methods: {
    async initNews() {
      // const {data: res} = await getNewsAPI();
      // 1娱乐 2游戏 3体育
      const data = await getNewsAPI();
      this.NewsArr = data.data.data;
      if (this.active === 1) {
        const data = await getFunNewsAPI();
        this.NewsArr = data.data.data;
      }
      if (this.active === 2) {
        const data = await getGameNewsAPI();
        this.NewsArr = data.data.data;
      }

      if (this.active === 3) {
        const data = await getSportsNewsAPI();
        this.NewsArr = data.data.data;
      }
    },
    showArticleDeatail(id) {
      if (this.active === 0) {
        // query传值给页面判断是哪个分类的文章
        this.$router.push({path:"/article/" + id,query:{name:'article'}});
      }
      if (this.active === 1) {
        this.$router.push({path:"/funArticle/" + id,query:{name:'funArticle'}});
      }
      if (this.active === 2) {
        this.$router.push({path:"/GameArticle/" + id,query:{name:'GameArticle'}});
      }
      if (this.active === 3) {
        this.$router.push({path:"/sportsArticle/" + id,query:{name:'sportsArticle'}});
      }
    },
  },
};
</script>

<style lang='less' scoped>
.imgsbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 113px;
    height: 70px;
    background-color: #f8f8f8;
    object-fit: cover;
  }
}
</style>