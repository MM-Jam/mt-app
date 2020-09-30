<template>
  <div class="m-iselect">
    <span class="name">按省份选择：</span>
    <m-select
      :value="proData"
      :showList="showProList"
      @change_wrapper="handleProListShow"
      @change_data="changeProvince"
      :colList="colProList"
      :title="proTitle"
      isCity="false"
    />
    <m-select
      :value="cityData"
      :disabled="cityDisabled"
      :showList="showCityList"
      @change_wrapper="handleCityListShow"
      @change_data="changeCity"
      :title="cityTitle"
      :colList="cityList"
      isCity="true"
    />
    <span class="name">直接搜索：</span>
    <el-select
      v-model="searchMsg"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      @inpput="remoteMethod"
    >
      <el-option
        @click="changeCity(item)"
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      ></el-option>
    </el-select>
  </div>
</template>
<script>
import mSelect from "./selectDown.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      cityList: [],
      searchMsg: "",
      proData: "省份",
      cityData: "城市",
      proTitle: "省份",
      cityTitle: "城市",
      cityDisabled: true,
      showProList: false,
      showCityList: false,
      proList: [],
      showData: [],
      allCity: [],
      searchList: ["广州", "深圳", "哈尔滨", "上海", "广西"],
    };
  },
  computed: {
    colProList() {
      //一列是12个
      let colProList = [];
      let cycleNum = Math.ceil(this.proList.length / 12);
      for (let i = 0; i < cycleNum; i++) {
        colProList[i] = [];
        for (let j = i * 12; j < (i + 1) * 12; j++) {
          if (!this.proList[j]) break;
          colProList[i].push(this.proList[j]);
        }
      }
      return colProList;
    },
  },
  created() {
    api.getProvince().then((res) => {
      if (res.data.status == "success") {
        this.showData = res.data.data;
        console.log(this.showData);
        res.data.data.forEach((item, index) => {
          this.proList.push(item.provinceName);
        });
      }
    });
  },
  components: {
    mSelect,
  },
  methods: {
    changeCity(city) {
      console.log("------");
      // this.$store.state.curCity = city;
      this.$router.push({ name: "index" });
    },
    handleProListShow(flag) {
      this.showProList = flag;
      if (flag) {
        this.showCityList = false;
      }
    },
    handleCityListShow(flag) {
      this.showCityList = flag;
      if (flag) {
        this.showProList = false;
      }
    },
    changeCityList() {
      let colCityList = [];
      let cycleNum = Math.ceil(this.cityList.length / 12);
      for (let i = 0; i < cycleNum; i++) {
        colCityList[i] = [];
        for (let j = i * 12; j < (i + 1) * 12; j++) {
          if (!this.cityList[j]) break;
          colCityList[i].push(this.cityList[j]);
        }
      }
      this.cityList = colCityList;
    },
    changeProvince(item) {
      this.proData = item;
      this.cityDisabled = false;
      this.showProList = false;
      let cityIndex = this.proList.indexOf(item);
      let showCity = this.showData[cityIndex].cityInfoList;
      showCity.forEach((item) => {
        this.cityList.push(item.name);
      });
      this.changeCityList();
    },
    changeCity(item) {
      this.cityData = item;
    },
    remoteMethod() {
      console.log(this.searchMsg)
      this.searchList = this.searchList.filter((item) => {
        return item.includes(this.searchMsg);
      });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>