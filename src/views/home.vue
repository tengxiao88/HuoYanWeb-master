<template>
  <div>
    <router-view></router-view>
    <van-tabbar route active-color="#87CEFA" inactive-color="#000">
      <van-tabbar-item to="/home" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item to="/order" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MenuHome',
  setup() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
