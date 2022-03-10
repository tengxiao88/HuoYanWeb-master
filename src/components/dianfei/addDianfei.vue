<template>
  <div class="AddDf">
    <van-row justify="space-around">
      <van-col span="4">
        <div class="van-col-checked">
          <van-checkbox v-model="region" disabled>
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? inactiveIcon : activeIcon" />
            </template>
          </van-checkbox>
          <div class="shuxian">
            <van-image width="2" height="50" src="../../../public/shuxian.png" />
          </div>
          <van-checkbox v-model="account" disabled class="van-checkbox-xia">
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? inactiveIcon : activeIcon" />
            </template>
          </van-checkbox>
          <div class="shuxian" v-if="nanwang">
            <van-image width="2" height="50" src="../../../public/shuxian.png" />
          </div>
          <van-checkbox v-if="nanwang" v-model="identity" disabled class="van-checkbox-xia">
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? inactiveIcon : activeIcon" />
            </template>
          </van-checkbox>
        </div>
      </van-col>
      <van-col span="18" class="van-col-field">
        <div class="wz_checkend1">缴费地区</div>
        <van-field
          v-model="region"
          is-link
          readonly
          placeholder="请选择所在地区"
          @click="addDfFieldShow(), nanaddDfFieldShow()"
        />
        <div class="wz_checkend2">缴费户号</div>
        <van-row>
          <van-col span="15">
            <van-field
              class="van-field-huhao"
              v-model="account"
              type="digit"
              maxlength="18"
              placeholder="请输入缴费户号"
            />
          </van-col>
          <van-col span="8"
            ><van-button class="van-button-huhao" round size="mini">如何获取户号</van-button>
            <div class="aaaa"></div>
          </van-col>
          <van-col span="1"></van-col>
        </van-row>
        <div v-if="nanwang" class="wz_checkend2">身份证后六位</div>
        <van-col v-if="nanwang">
          <van-field
            v-model="identity"
            type="digit"
            maxlength="6"
            placeholder="请输入身份证后六位"
          />
        </van-col>
      </van-col>
      <van-field
        label="备注"
        label-width="12vw"
        class="van-field-beizhu"
        v-model="remarks"
        placeholder="填写备注信息（选填）"
      />
    </van-row>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { Toast } from 'vant'

export default {
  name: 'AddDf',
  components: {},
  props: ['nanwang'],
  setup(props, { emit }) {
    // const propsAdddf = reactive(props.myAddDf)
    const AdddfValue = reactive([])
    const region = ref()
    // 用户备注信息
    const remarks = ref(' ')
    const checked = ref(false)
    const account = ref()
    // 南网身份证号码
    const identity = ref()
    const nanwang = ref(props.nanwang)
    // 国网打开地区选择器
    const addDfFieldShow = () => {
      emit('AddDfFieldShow')
    }
    // 南网打开地区选择器
    const nanaddDfFieldShow = () => {
      emit('nanaddDfFieldShow')
    }
    // 国网地区选择
    const Addroaming = (value) => {
      AdddfValue.value = value
      region.value = AdddfValue.value[0].region
      // console.log(AdddfValue.value[0].name);
    }
    // 南网地区选择
    const nanwangAddroaming = (value) => {
      AdddfValue.value = value
      region.value = AdddfValue.value[0].region
      // region.value = AdddfValue.value[0].region
      // // console.log(AdddfValue.value[0].name);
    }
    // 按钮下一步
    const xiayibuPicker = () => {
      if (!account.value || !region.value) {
        if (!account.value) {
          Toast.fail('请输入户号')
        } else {
          Toast.fail('请选择地区')
        }
      }else if(nanwang.value && !identity.value){
        Toast.fail('请输入身份证后六位')
      } else {
        const ArrPingjie = [
          {
            index: AdddfValue.value[0].index,
            region: AdddfValue.value[0].region,
            account: account.value,
            identity: identity.value,
            remarks: remarks.value
          }
        ]
        emit('xiayibuPicker', ArrPingjie)
      }
    }
    return {
      xiayibuPicker,
      // 国网地区选择
      Addroaming,
      // 南网地区选择
      nanwangAddroaming,
      // 国网打开地区选择器
      addDfFieldShow,
      // 南网打开地区选择器
      nanaddDfFieldShow,
      AdddfValue,
      region,
      identity,
      remarks,
      checked,
      account,
      activeIcon: '../../../public/fuxuan.png',
      inactiveIcon: '../../../public/gou.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.AddDf {
  margin-bottom: 20px;
  margin-top: 10px;
}
.ci_Page_Spacing {
  height: 35px;
}
.ci {
  border-bottom: 2px solid #000000;
}
.shuxian {
  margin: 0px 0px 0px 8.5px;
}
.img-icon {
  height: 20px;
}
.van-checkbox {
  height: 25px;
}
.van-checkbox-xia {
  margin-top: -5px;
}
.van-col-checked {
  margin-left: 50%;
}
.wz_checkend1 {
  margin-top: 5px;
  color: #7c7c7c;
  font-size: 10px;
  letter-spacing: 1px;
}
.wz_checkend2 {
  margin-top: 12px;
  color: #7c7c7c;
  font-size: 10px;
  letter-spacing: 1px;
}
.van-field {
  border-bottom: 1px solid #dcdcdc;
}
.van-button-huhao {
  top: 8px;
  width: 112.5%;
  color: #fff;
  background-color: #87cefa;
}
.van-field-beizhu {
  margin: 0px 20px 0px 20px;
}
.aaaa {
  border-bottom: 1px solid #dcdcdc;
  height: 18px;
  width: 112.5%;
}
/* .van-col-field{
  margin: 0px 20px 0px 0px;
} */
/* .van-field {
  border: 1px solid red;
} */
</style>
