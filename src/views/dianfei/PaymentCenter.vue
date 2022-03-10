<template>
  <div>
    <van-notice-bar mode="closeable" left-icon="volume-o" wrapable
      >月初缴费单位繁忙，订单到账时间可能延迟，请留意电费余额！</van-notice-bar
    >
    <div>
      <!-- 缴费信息 -->
      <div class="Page_Spacing pay_Page_Spacing">
        <div class="Zone_Colour">
          <div class="avatar_box">
            <img src="../../../public/baishandian.png" alt="" />
          </div>
          <div class="xinxi_avatar_box">
            <!-- 居中 -->
            <van-row justify="center">
              <van-col span="5"><div class="wz_checkend">缴费地区</div></van-col>
              <van-col span="2"></van-col>
              <van-col span="11"
                ><div class="Characters_15px">{{ zhanghu[0].region }}</div></van-col
              >
            </van-row>
            <van-row justify="center">
              <van-col span="5"><div class="wz_checkend">缴费户号</div></van-col>
              <van-col span="2"></van-col>
              <van-col span="11"
                ><div class="Characters_15px">{{ zhanghu[0].account }}</div></van-col
              >
            </van-row>
            <van-row v-if="zhanghu[0].identity != ' '" justify="center">
              <van-col span="5"><div class="wz_checkend">身份证号</div></van-col>
              <van-col span="2"></van-col>
              <van-col span="11"
                ><div class="Characters_15px">{{ zhanghu[0].identity }}</div></van-col
              >
            </van-row>
            <van-row justify="center">
              <van-col span="5"><div class="wz_checkend">备注</div></van-col>
              <van-col span="2"></van-col>
              <van-col span="11"
                ><div class="Characters_15px DIVhuan">{{ zhanghu[0].remarks }}</div></van-col
              >
            </van-row>
          </div>
        </div>
        <!-- 全国电费充值 -->
        <div class="Zone_Colour">
          <div class="Zone_Colour_guowang">
            <i class="web-font Characters_16px">国网电费充值</i>
            <van-divider
              :style="{ borderColor: '#dcdcdc', margin: '10px 5px 0px 5px' }"
              :hairline="false"
            />
          </div>
          <div class="tsop">
            <van-button
              v-for="item in columns"
              :key="item"
              class="tsop-button"
              color="#D8ECFB"
              size="large"
              @click="showDialog"
              ><div class="zhekou">95.5折</div>
              <div class="jiage">{{ item }}元</div>
              <div class="shoujia">售价：{{ item * 0.95 }}元</div>
            </van-button>
            <van-button class="tsop-button" color="#D8ECFB" size="large" @click="showPopup">
              <div class="jiage">更多</div>
            </van-button>
          </div>
        </div>
        <div class="cihuhao">
          <van-row justify="center">
            <van-col span="4"></van-col>
            <van-col span="10"
              ><router-link
                class="cihuhao_link"
                :to="{ name: 'Order', params: { huhao: zhanghu[0].huhao } }"
                >此户号的缴费记录</router-link
              ></van-col
            >
            <van-col span="4"></van-col>
          </van-row>
          <van-row>
            <van-col span="5"></van-col>
            <van-col span="14"></van-col>
            <van-col span="5"></van-col>
          </van-row>
        </div>
      </div>
    </div>
    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :closeable="true"
      :style="{ height: '80%' }"
    >
      <popup></popup>
    </van-popup>
  </div>
</template>

<script>
// import { ref,reactive } from 'vue'
import { ref } from 'vue'
import { Dialog } from 'vant'
import popup from '../../components/kong/Popup.vue'
import router from '../../router/index'

export default {
  name: 'tiPayment',
  components: {
    popup
  },
  setup() {
    const show = ref(false)
    const columns = ['50', '100', '200', '500', '1000']
    // 获取fyontHome传递的值
    const zhanghu = ref([router.currentRoute.value.params])
    const wenzi =
      '1.持电卡非智能电表用户不支持改缴费业务。\n2.电费欠费超过3000不能充值，充值金额必须大于欠费金额，充值钱请先确认当前户号所剩余额。\n3.广东、广西、云南、贵州、海南、西藏省份请移步南网络模块充值；冀北地区：唐山，张家口，秦皇岛，廊坊，承德；内蒙古下单请选择蒙东！\n4.充值号码填写错误，概不退款！\n5.缴费可能存在分批到账，余额可在支付宝、微信查询，网上国网可查询详细到账情况。\n 6.电费充值小额0-24小时到账，中额48小时内到账，大额72小时内到账。介意勿拍！\n 7.单账号切勿拆开充值，如：1000一次性拆成两个500。必须等上一个到账后方可继续。大额可联系客服帮忙！\n 8.如有疑问和其他问题，可联系客服进行答疑和咨询。'
    // 更多商品
    const showPopup = () => {
      show.value = true
    }
    // 选择购买的商品
    const showDialog = () => {
      Dialog.alert({
        confirmButtonColor: '#87cefa',
        closeOnClickOverlay: true,
        messageAlign: 'left',
        allowHtml: true,
        title: '温馨提示',
        message: `<i class="web-font Characters_15px">${wenzi}</i>`
      }).then(() => {
        console.log('123456')
      })
    }
    return {
      columns,
      show,
      // 缴费信息字段
      zhanghu,
      // 文字
      wenzi,
      // 更多商品
      showPopup,
      // 选择购买的商品
      showDialog
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.pay_Page_Spacing {
  margin-top: 10px;
}
.van-notice-bar {
  letter-spacing: 1px;
}
.avatar_box {
  height: 50px;
  width: 50px;
  border: 10px solid #ffa500;
  border-radius: 50%;
  // padding: 10px;
  box-shadow: 0 0 10px #f4a460;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffa500;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffa500;
  }
}
.xinxi_avatar_box {
  margin: 50px 0px 20px 0px;
}
.wz_checkend {
  float: right;
  font-weight: bold;
  color: #7c7c7c;
  font-size: 15px;
  letter-spacing: 1px;
}
.Characters_15px {
  font-weight: bold;
  font-size: 15px;
  color: #585858;
}
.van-row {
  margin: 0px 0px 8px 0px;
}
.tsop {
  padding: 10px 5px 15px 5px;
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
.Zone_Colour_guowang {
  margin: 15px 1.5% 0px 1.5%;
}
.Characters_16px {
  font-size: 16px;
  color: #373737;
  margin-left: 5px;
}
.cihuhao {
  .cihuhao_link {
    position: absolute;
    margin-top: 25px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #435795;
  }
}
.Characters_15px {
  font-size: 15px;
  color: #585858;
}
</style>
