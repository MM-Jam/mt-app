<template>
  <div class="m-header-searchbar search-panel">
    <el-row>
      <el-col class="left" :span="10">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="14" class="center">
        <div class="wrapper">
          <el-input @input="Input" v-model="$store.state.searchValue" placeholder="搜索商家或地点"></el-input>
          <router-link :to="{name:'goodsList'}">
            <el-button type="primary" @click="btnClick">
              <i class="el-icon-search"></i>
            </el-button>
          </router-link>
          <dl
            class="searchList"
            v-if="$store.state.searchValue && shouldShowList"
            @mouseleave="leaveList"
          >
            <router-link :to="{name:'goodsList'}">
              <dd
                @click="searchMsgChange(item)"
                v-for="(item,index) in showList"
                :key="item+'_'+index"
              >{{ item }}</dd>
            </router-link>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      shouldShowList: true,
      searchList: [],
      // searchMsg: "",
    };
  },
  created() {
    api.getSearch().then((res) => {
      if (res.data.status === "success") {
        // console.log(res.data.data.list);
        this.searchList = res.data.data.list;
        // console.log(this.searchList)
      }
    });
  },
  computed: {
    showList() {
      let showList = [];
      showList = this.searchList.filter((item, index) => {
        return item.includes(this.$store.state.searchValue);
      });
      return showList;
    },
  },
  methods: {
    Input() {
      this.shouldShowList = true;
    },
    leaveList() {
      console.log('------')
      this.shouldShowList = false;
    },
    btnClick() {
        this.shouldShowList = false;
    },
    searchMsgChange(item) {
      this.$store.state.searchValue = item;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/search.scss";
@import "@/assets/css/public/header/index.scss";
</style>