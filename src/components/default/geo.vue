<template>
  <div class="m-geo">
    <i class="el-icon-location" />
    <span class="position">{{ $store.state.curCity }}</span>
    <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
    <span>
      [
      <span
        class="area"
        v-for="(area,index) in cityArea"
        :key="area.name+'_'+index"
      >{{area.name}}</span>
      ]
    </span>
    <div class="m-user">
      <router-link class="login" :to="{name:'login'}">立即登录</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data(){
    return{
      cityArea:[],
    }
  },
  watch: {
    "$store.state.curCity": function () {
      console.log(this.$store.state.nearArea)
      this.cityArea = this.$store.state.nearArea
    },
  },
  created() {
    api.getCurCity().then((res) => {
      console.log(res.data);
      if (res.data.status === "success") {
        this.$store.state.curCity = res.data.data.name;
        // this.$store.state.nearArea = res.data.data.nearCity;
        this.cityArea = res.data.data.nearCity
      }
    });
  },
};
</script>