<template>
  <div class="Page_Spacing">
    <div class="tsop">
      <van-button v-for="item in 20" :key="item" class="tsop-button" color="#D8ECFB" size="large"
        ><div class="zhekou">95.5折</div>
        <div class="jiage">{{ item }}元</div>
        <div class="shoujia">售价：{{ item }}元</div>
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kongPopup'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.tsop {
  padding: 30px 5px 15px 5px;
}
.tsop-button {
  width: 30.333%;
  margin: 5px 1.5% 5px 1.5%;
  padding: 8px 0px 5px 0px;
  height: 70px;
  border-radius: 5px;
  div {
    color: #000;
  }
}
.zhekou {
  position: absolute;
  top: -1px;
  left: -1px;
  border-radius: 3px;
  padding: 2px 2px 2px 2px;
  background-color: #dbfce9;
  color: #31c45a !important;
  width: 60px;
  font-size: 13px;
}
.jiage {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
}
.shoujia {
  position: absolute;
  top: 80%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  font-size: 13px;
}
</style>
