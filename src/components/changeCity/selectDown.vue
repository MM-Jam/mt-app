<template>
  <div
    :class="['choose-wrap',disabled?'disabled':'']"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content active" v-show="showList">
        <h2>{{ title }}</h2>
        <div class="wrapper">
          <div class="col" v-for="(items,index) in colList" :key="index">
            <span
              v-for="item in items"
              :class="{'mt-item':true ,'active': item == value}"
              :key="item"
              @click="changeShowData(item)"
            >{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value", "disabled", "showList", "colList", "title", "isCity"],
  data() {
    return {};
  },
  methods: {
    documentClick() {
      this.$emit("change_wrapper", false);
    },
    showWrapper(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("change_wrapper", true);
      }
    },
    changeShowData(item) {
      console.log(this.isCity)
      if (this.isCity=='true') {
        this.$store.state.curCity = item;
        this.$router.push({name:'index'})
      }
      this.$emit("change_data", item);
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>