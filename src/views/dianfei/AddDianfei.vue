<template>
  <div>
    <div class="Page_Spacing">
      <div class="ci_Page_Spacing">
        <van-icon class="Script_Float" size="35" name="../../../public/shandian.png" />
        <i class="web-font Characters_20px Script_Centre Script_Float">电费</i>
      </div>
      <div class="Zone_Colour ci_Zone_Colour">
        <van-tabs @click-tab="onClickTab" title-active-color="#87CEFA" color="#87CEFA" swipeable>
          <!-- v-model:active="active" -->
          <van-tab title="国网">
            <AddDf
              @addDfFieldShow="AddDfFieldShow"
              @xiayibuPicker="AddXiayibuPicker"
              ref="roaming"
            ></AddDf>
          </van-tab>
          <van-tab title="南网">
            <!-- @nanxiayibuPicker="nanAddXiayibuPicker" -->
            <AddDf
              nanwang="true"
              @nanaddDfFieldShow="nanAddDfFieldShow"
              @xiayibuPicker="AddXiayibuPicker"
              ref="nanwangroaming"
            ></AddDf>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="remind">
      <remind @xiayibuRemind="AddxiayibuRemind" ref="roamingRemind"></remind>
    </div>
    <div class="xiayibu">
      <van-row>
        <van-col span="6"></van-col>
        <van-col span="12">
          <van-sticky :offset-bottom="80" position="bottom">
            <van-button class="van-button-xiayibu" round size="small" @click="xiayiButton">
              <i class="web-font"> 下一步 </i>
            </van-button>
          </van-sticky>
        </van-col>
        <van-col span="6"></van-col>
      </van-row>
    </div>
    <div class="Picker">
      <!-- eslint-disable-next-line vue/no-v-model-argument -->
      <van-popup v-model:show="show" round position="bottom" :style="{ height: '40%' }"
        ><Picker
          nanwang="true"
          @onCancel="AddDidnfeionCancel"
          @onConfirm="AddDidnfeionConfirm"
        ></Picker>
      </van-popup>
      <!-- eslint-disable-next-line vue/no-v-model-argument -->
      <van-popup v-model:show="nanshow" round position="bottom" :style="{ height: '40%' }">
        <nanPicker
          nanwang="true"
          @onCancel="nanAddDidnfeionCancel"
          @onConfirm="nanAddDidnfeionConfirm"
        ></nanPicker>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { Dialog } from 'vant'
import AddDf from '../../components/dianfei/addDianfei.vue'
// 国网
import Picker from '../../components/kong/Picker.vue'
// 南网
import nanPicker from '../../components/kong/nanPicker.vue'
import remind from '../../components/kong/remind.vue'
import router from '../../router/index'

export default {
  name: 'AddDianfei',
  components: {
    AddDf,
    Picker,
    nanPicker,
    remind
  },
  setup() {
    const active = ref(0)
    const checked1 = ref(0)
    const checked2 = ref(0)
    // 国网
    const show = ref(false)
    // 南网
    const nanshow = ref(false)
    const nanguo = ref('国网')
    const myPicker = reactive([])
    // 国网地区选择器
    const roaming = ref()
    // 南网地区选择器
    const nanwangroaming = ref()
    const roamingRemind = ref()
    const myAddXiayibu = reactive([])
    const RemindValue = ref(false)
    const onClickTab = () => {
      if (nanguo.value === '南网') {
        nanguo.value = '国网'
      } else {
        nanguo.value = '南网'
      }
    }
    // 国网打开地区选择器
    const AddDfFieldShow = () => {
      show.value = true
    }
    // 南网打开地区选择器
    const nanAddDfFieldShow = () => {
      nanshow.value = true
    }
    // 国网
    const AddDidnfeionCancel = () => {
      show.value = false
    }
    const AddDidnfeionConfirm = (value) => {
      myPicker.value = value
      roaming.value.Addroaming(value)
      // console.log(myPicker.value[0].name);
      show.value = false
    }
    // 南网
    const nanAddDidnfeionCancel = () => {
      nanshow.value = false
    }
    const nanAddDidnfeionConfirm = (value) => {
      myPicker.value = value
      nanwangroaming.value.Addroaming(value)
      // console.log(myPicker.value[0].name);
      nanshow.value = false
    }
    // 下一步按钮
    const xiayiButton = () => {
      roamingRemind.value.xiayibuRemind()
      if (nanguo.value === '南网') {
        nanwangroaming.value.xiayibuPicker()
      } else {
        roaming.value.xiayibuPicker()
      }
    }
    // 获取下一步的值
    const AddXiayibuPicker = (value) => {
      myAddXiayibu.value = value
      if (!RemindValue.value) {
        Dialog.alert({
          title: '温馨提示',
          message: '请先阅读充值须知，并勾选已读',
          confirmButtonColor: '#87cefa',
          closeOnClickOverlay: true
        }).then(() => {
          // on close
        })
      } else {
        Dialog.confirm({
          title: '温馨提示',
          message: `请核对信息是否正确！\n地区：${myAddXiayibu.value[0].region}\n户号：${myAddXiayibu.value[0].account}`,
          confirmButtonColor: '#87cefa',
          closeOnClickOverlay: true
        })
          .then(() => {
            if (!value[0].remarks) {
              value[0].remarks = ' '
            }
            if (!value[0].identity) {
              value[0].identity = ' '
            }
            console.log(value[0])
            router.push({
              name: 'PaymentDianfei',
              params: value[0]
            })
          })
          .catch(() => {
            console.log('取消')
          })
      }
    }
    const AddxiayibuRemind = (value) => {
      RemindValue.value = value
    }
    return {
      AddxiayibuRemind,
      // 国网打开地区选择器
      AddDfFieldShow,
      // 南网打开地区选择器
      nanAddDfFieldShow,
      // 国网
      AddDidnfeionCancel,
      AddDidnfeionConfirm,
      // 南网
      nanAddDidnfeionCancel,
      nanAddDidnfeionConfirm,
      xiayiButton,
      // 下一步的值
      AddXiayibuPicker,
      onClickTab,
      // 国网打开地区选择器
      show,
      // 南网打开地区选择器
      nanshow,
      myPicker,
      active,
      checked1,
      checked2,
      // 国网地区选择器
      roaming,
      // 南网地区选择器
      nanwangroaming,
      roamingRemind,
      nanguo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ci_Page_Spacing {
  height: 35px;
}
.ci {
  border-bottom: 2px solid #000000;
}
.Picker {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
}
.van-button-xiayibu {
  top: 8px;
  height: 145%;
  width: 100%;
  font-size: 100%;
  color: #fff;
  background-color: #87cefa;
  border: 1px solid #dcdcdc;
  box-shadow: 0 0 20px #a9a9a9;
}
</style>
