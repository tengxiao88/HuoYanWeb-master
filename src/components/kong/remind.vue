<!--选择器封装-->
<template>
  <div class="Remid Page_Spacing">
    <div class="Zone_Colour">
      <!-- 两端对齐 -->
      <div class="Zone_Colour_Spacing">
        <van-row justify="space-between">
          <van-col span="9"><i class="web-font Characters_16px">电费充值须知</i></van-col>
          <van-col span="4"></van-col>
          <van-col span="5">
            <van-checkbox checked-color="#87cefa" v-model="YiduChecked">
              <i class="web-font Characters_16px">已读</i>
            </van-checkbox>
          </van-col>
        </van-row>
        <van-divider
          :style="{ borderColor: '#dcdcdc', margin: '10px 0px 10px 0px' }"
          :hairline="false"
        />
        <div class="text-remind">
          <div v-for="(itme, index) in remind" :key="index">
            <i class="web-font Characters_15px">
              {{ itme }}
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'xuRemind',
  setup(props, { emit }) {
    const YiduChecked = ref(false)
    const wenzi =
      '1.持电卡非智能电表用户不支持改缴费业务。\n2.电费欠费超过3000不能充值，充值金额必须大于欠费金额，充值钱请先确认当前户号所剩余额。\n3.广东、广西、云南、贵州、海南、西藏省份请移步南网络模块充值；冀北地区：唐山，张家口，秦皇岛，廊坊，承德；内蒙古下单请选择蒙东！\n4.充值号码填写错误，概不退款！\n5.缴费可能存在分批到账，余额可在支付宝、微信查询，网上国网可查询详细到账情况。\n 6.电费充值小额0-24小时到账，中额48小时内到账，大额72小时内到账。介意勿拍！\n 7.单账号切勿拆开充值，如：1000一次性拆成两个500。必须等上一个到账后方可继续。大额可联系客服帮忙！\n 8.如有疑问和其他问题，可联系客服进行答疑和咨询。'
    const remind = wenzi.split('\n')
    const xiayibuRemind = () => {
      emit('xiayibuRemind', YiduChecked.value)
    }
    return {
      xiayibuRemind,
      YiduChecked,
      remind
    }
  }
}
</script>

<style scoped>
.Characters_16px {
  font-size: 16px;
  color: #373737;
}
.Characters_15px {
  font-size: 15px;
  color: #585858;
}
.Zone_Colour {
  margin-top: 0px !important;
}
.Zone_Colour_Spacing {
  margin: 20px 20px 20px 20px;
}
.text-remind > div {
  margin-bottom: 10px;
  letter-spacing: 1px;
}
/* .van-divider{
  background-color:black;
} */
.Remid {
  padding-bottom: 85px;
}
</style>
