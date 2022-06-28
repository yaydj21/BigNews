<template>
  <div>
    <van-cell center v-for="item in NewsArr" :key="item.id" @click="$router.push('/article/' + item.id)">
      <van-cell :title="item.title" />
      <div class="imgsbox">
        <img :src="item.img_url" alt="" />
        <img :src="item.img_url" alt="" />
        <img :src="item.img_url" alt="" />
        <!-- <img :src="@/imgs/toutiao_logo.png" alt="" />
        <img :src="@/imgs/toutiao_logo.png" alt="" /> -->
      </div>
      <van-cell :title="item.time" />
    </van-cell>
  </div>
</template>

<script>
import { getNewsAPI } from '@/api/NewsApi';
export default {
  name: "ArticleItem",
  data(){
    return{
      NewsArr:[],
    }
  },
  created(){
    this.initNews();
  },
  methods:{
    async initNews(){
      // const {data: res} = await getNewsAPI();
      const data = await getNewsAPI();
      this.NewsArr = data.data.data;
    }
  }
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