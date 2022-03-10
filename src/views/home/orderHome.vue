<template>
  <div class="orderHome">
    <van-search
      class="order_search"
      v-model="searchValue"
      show-action
      label="户号"
      placeholder="请输入户号"
    >
      <template #action>
        <div @click="onClickButton">搜索</div>
      </template>
    </van-search>
    <van-notice-bar
      scrollable
      color="#1989fa"
      background="#ecf9ff"
      left-icon="volume-o"
      text="下单后可搜索户号进行查询！"
    />
    <div class="order_complete">
      <div v-for="item in 5" :key="item" class="Page_Spacing_prder Zone_Colour">
        <div class="order_complete_order">
          <!-- 两端对齐 -->
          <van-row>
            <van-col span="19"
              ><span :style="`letter-spacing:1px`">订单号：</span
              ><span>xxxxxxxxxxxxxxxxxxxxxx</span></van-col
            >
            <van-col span="0"></van-col>
            <van-col span="5">充值成功</van-col>
          </van-row>
        </div>
        <van-divider
          :style="{ borderColor: '#dcdcdc', margin: '10px 5px 10px 5px' }"
          :hairline="false"
        />
        <div class="order_complete_xian">
          <van-row>
            <van-col span="7.5"
              ><van-image
                width="100"
                height="125"
                src="https://hbimg.huabanimg.com/148a41fbd77e06d1dca24452f86adb1baebc565711d98-Qcn7Zv_fw1200"
                ><div>100元</div></van-image
              ></van-col
            >
            <van-col span="2"></van-col>
            <van-col class="order_complete_xian_xi" span="13.5">
              <div class="order_complete_xian_biao">全国 - 国网电费100面额</div>
              <div>充值户号：xxxxxxxxxx</div>
              <div>地区：湖南</div>
              <div>订单金额：95</div>
              <div>完成时间：2022-02-15 18:49:02</div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '../../router/index'

export default {
  name: 'OrderHome',
  components: {},
  setup() {
    // 户号信息
    const searchValue = ref('')
    if (searchValue.value) {
      searchValue.value = router.currentRoute.value.params.account
    } else {
      console.log('空')
      searchValue.value = ''
    }
    // 按户号搜索
    const onClickButton = () => {
      console.log(searchValue.value)
    }
    return {
      // 户号信息
      searchValue,
      // 按户号搜索
      onClickButton
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.orderHome {
  margin-bottom: 65px;
}
.order_complete {
  margin: 0px 10px 20px 10px;
}
.van-notice-bar {
  letter-spacing: 2px;
}
.Zone_Colour {
  margin-top: 0px;
}
.order_complete_order {
  color: #7c7c7c;
  font-size: 15px;
  margin: 10px 0px 10px 10px;
}
.order_complete_xian {
  color: #7c7c7c;
  font-size: 15px;
}
.van-image {
  margin-left: 8px;
  div {
    color: #000;
    font-weight: bold;
    font-size: 23px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-30%, -50%);
  }
}
.order_complete_xian_biao {
  color: #000;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 18px;
}
.order_complete_xian_xi {
  margin: 0px 0px 0px -5px;
  div {
    margin-bottom: 5px;
  }
}
.Page_Spacing_prder {
  margin-bottom: 15px;
}
.order_search {
  margin-right: 10px;
}
// .order_complete {
//   margin: ;
// }
</style>
