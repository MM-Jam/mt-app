<template>
  <div class="m-istyle">
    <dl @mouseover="listChoose">
      <dt>有格调</dt>
      <dd data-type="all">全部</dd>
      <dd data-type="food">约会聚餐</dd>
      <dd data-type="spa">丽人SPA</dd>
      <dd data-type="movie">电影演出</dd>
      <dd data-type="travel">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in showList" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      cardList: {},
      kind: "all",
    };
  },
  computed: {
    showList() {
      return this.cardList[this.kind];
    },
  },
  created(){
    api.getStyle().then(res=>{
      // console.log(res)
      if(res.data.status==='success'){
        this.cardList = res.data.data
      }
    })
  },
  methods: {
    listChoose(e) {
      if (e.target.tagName !== "DD") {
        return;
      }
      this.kind = e.target.getAttribute("data-type");
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>