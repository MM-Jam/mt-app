<template>
  <div class="s-item">
    <dt>
      <img :src="itemMsg.image" :alt="itemMsg.title" />
    </dt>
    <dd>
      <!--这里应该是跳转详情页 -->
      <router-link :to="{name:'goodPage'}"><h3>{{ itemMsg.title }}</h3></router-link>
      <el-rate
        v-model="itemMsg.score"
        disabled
        text-color="#ff9900"
      ></el-rate>
      <span v-if="itemMsg.score > 4.5">很好</span>
      <span v-else-if="itemMsg.score > 4">好</span>
      <span v-else-if="itemMsg.score > 3.5">不错</span>
      <span v-else-if="itemMsg.score > 3">一般</span>
      <span v-else>很差</span>
      <span class>{{itemMsg.score}}分</span>
      <span class="s-item-comment-total">{{itemMsg.commentNum}}人评论</span>
      <p>
        <span class="s-item-tab">
          <span
            v-for="(v, i) in itemMsg.tab"
            :key="v"
          >{{v + (i < itemMsg.tab.length - 1 ? '|' : '')}}</span>
        </span>
        <span class="s-item-addr">{{itemMsg.address}}</span>
        <span>
          <a href="#">
            <i class="el-icon-location"></i>
            查看地图
          </a>
        </span>
      </p>
      <p>
        <span class="s-item-price">人均￥{{itemMsg.avg_price}}</span>
      </p>
      <ul class="deal-items">
        <li class="items" v-for="(item, index) in itemMsg.dealItems.slice(0, 2)" :key="index">
          <p class="deal-title">{{item.title}}</p>
          <p>
            <span class="deal-price">￥{{item.price}}</span>
            <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
            <span class="deal-sales">已售{{item.saleNum}}</span>
          </p>
        </li>
      </ul>
    </dd>
  </div>
</template>
<script>
export default {
  props: ["itemMsg"],
};
</script>
<!--
{
          image: "http://p0.meituan.net/xxxxc",
          title: "火鸡老店",
          type: "food",
          score: "4.1",
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃",
            },
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
          ],
        },
--!>