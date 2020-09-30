<template>
  <div>
    <div class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in alphaList" :key="item"><a :href="'#'+item">{{ item }}</a></dd>
    </div>
    <dl :id="index" v-for="(item,index) in alphaCity" :key="index" class="m-categroy-section">
      <dt>{{ index }}</dt>
      <dd v-for="city in item" :key="city+'_'" @click="changeCity(city)">
        <router-link :to="{name:'index'}">{{ city }}</router-link>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      cityData: [],
      //{A:[],B:[]}
      // alphaCity: {},
    };
  },
  created() {
    api.getCity().then((res) => {
      // console.log(res.data.data)
      this.cityData = res.data.data;
    });
  },
  computed: {
    alphaList() {
      let alphaArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let alphaList = alphaArr.split("");
      return alphaList;
    },
    alphaCity() {
      let alphaCity = {};
      this.cityData.forEach((city, index) => {
        if (!alphaCity[city.firstChar.toUpperCase()]) {
          alphaCity[city.firstChar.toUpperCase()] = [];
        }
        alphaCity[city.firstChar.toUpperCase()].push(city.name);
      });
      return alphaCity;
    },
  },
  methods:{
    changeCity(city){
      this.$store.state.curCity = city
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>