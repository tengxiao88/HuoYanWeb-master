<template>
  <div class="myHome">
    <div>
      <van-image width="100%" height="200" src="../../../public/jianbian.png">
        <div class="avatar_box">
          <img src="../../../public/shandian.png" alt="" />
        </div>
        <div class="myHome_name">孤枭°</div>
      </van-image>
    </div>
    <div class="cnayong_div">
      <div class="canyong">常用功能</div>
      <van-divider
        :style="{ borderColor: '#dcdcdc', margin: '10px 5px 10px 5px' }"
        :hairline="false"
      />
      <div class="tong" @click="lianxi"><van-icon name="warning-o" />申请代理</div>
      <div class="tong"><van-icon name="share-o" />分享好友</div>
      <div class="tong" @click="lianxi"><van-icon name="orders-o" />我的订单</div>
      <div class="tong" @click="lianxi"><van-icon name="phone-o" />联系客服</div>
    </div>
    <van-dialog
      v-model:show="show"
      title="扫描二维码添加客服"
      show-confirm-button
      message-align="center"
    >
      <img src="../../../public/shandian.png" />
    </van-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Test } from '../../utils/user'

export default {
  name: 'myHome',
  setup() {
    const show = ref(false)
    const lianxi = () => {
      show.value = true
    }
    // const Testlist = ref([])
    Test.then((res) => {
      console.log(res)
      // Testlist.value = ref([...res.data])
    })
    return {
      show,
      lianxi
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.avatar_box {
  height: 80px;
  width: 80px;
  border: 1px solid #fff;
  border-radius: 50%;
  // padding: 10px;
  box-shadow: 0 0 10px #fff;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.myHome_name {
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 25px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cnayong_div {
  margin: 20px 20px 0px 20px;
}
.canyong {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
}
.tong {
  font-size: 18px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.van-icon {
  color: #4b98e6;
  margin-right: 10px;
  font-size: 18px;
}
</style>
