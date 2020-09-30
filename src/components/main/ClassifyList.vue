<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="listLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in classifyList" :key="item+'_'+index" @mouseenter="listEnter(index)">
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="datailLeave">
      <template v-for="(item, index) in curDetail.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v, i) in item.items" :key="v + '_'+ i">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      classifyList: [],
      listIndex: null,
      timer: null,
    };
  },
  created() {
    api.getLeftNav().then((res) => {
      if (res.data.status == "success") {
        this.classifyList = res.data.data
        // console.log(res.data)
      }
    });
  },
  computed: {
    curDetail() {
      return this.classifyList[this.listIndex];
    },
  },
  methods: {
    listEnter(index) {
      this.listIndex = index;
    },
    listLeave() {
      let self = this;
      this.timer = setTimeout(function () {
        self.listIndex = null;
      }, 200);
    },
    detailEnter() {
      clearInterval(this.timer);
    },
    datailLeave() {
      this.listIndex = null;
    },
  },
};
</script>