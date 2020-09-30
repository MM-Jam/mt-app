<template>
    <div>
        <goods-nav />
        <show-goods />
    </div>
</template>
<script>
import goodsNav from './goodsNav.vue'
import showGoods from './showGoods'
export default {
    components:{
        goodsNav,
        showGoods,
    }
}
</script>