<template>
  <div class="Page_Spacing">
    <div class="Characters_14px"><i class="web-font">我的缴费</i></div>
    <!-- 我的缴费  暂无数据 -->
    <div class="Zone_Colour Zone_Colour_DIV">
      <!-- 我的缴费 -->
      <div
        class="myDIV"
        @click="myJiaofei(item)"
        :index="index"
        v-for="(item, index) in emptyList"
        :key="index"
      >
        <van-swipe-cell>
          <van-row class="myRow">
            <van-col class="myIcon" span="5"><van-icon size="50" :name="shandian" /></van-col>
            <van-col class="myxInxi" span="15">
              <div class="myFont">
                <i class="web-font Characters_color Characters_14px">电费 | </i
                ><i class="web-font Characters_14px">{{ item.account }}</i
                ><i class="web-font Characters_color Characters_14px"> | </i>
                <i class="web-font Characters_14px">{{ item.region }}</i>
              </div>
              <div class="mybeizhu DIVcang">
                <i class="web-font Characters_color Characters_14px">备注： </i
                ><i class="web-font Characters_14px">{{ item.remarks }}</i>
              </div>
            </van-col>
            <van-col class="myArrow" span="4"
              ><van-icon color="#7C7C7C" size="20" name="arrow"
            /></van-col>
          </van-row>
          <template #right>
            <van-button
              @click="DelMyJiaofei(index)"
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
        <van-divider
          :style="{ borderColor: '#dcdcdc', margin: '0px 20px 0px 20px' }"
          :hairline="false"
        />
      </div>
      <!-- 暂无数据 -->
      <van-empty v-if="empty" description="暂无数据" />
    </div>
    <div class="Characters_spacing Characters_14px">
      <i class="web-font">新增缴费</i>
    </div>
    <!-- 宫格 -->
    <div class="Zone_Colour">
      <van-grid :column-num="3" clickable>
        <van-grid-item
          :index="index"
          v-for="(item, index) in ftonHomePath"
          :key="index"
          :icon="'../../../public/' + `${item.icon}` + '.png'"
          :to="`${item.to}`"
          :text="`${item.text}`"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { Dialog } from 'vant'
import router from '../../router/index'

export default {
  name: 'FtontHome',
  components: {},
  setup() {
    // iocn图标
    const shandian = ref('../../../public/shandian2.png')
    // 宫格数据
    const ftonHomePath = reactive([
      { icon: 'shandian', to: '/addDianfei', text: '电费' },
      { icon: 'huafei', to: '/', text: '话费' },
      { icon: 'ditei', to: '/', text: '地铁' }
    ])
    // 我的缴费数据
    const myJiaofei = (value) => {
      router.push({ name: 'PaymentDianfei', params: value })
    }
    const emptyList = reactive([
      { account: 1234657890, region: '湖南省', identity: ' ', remarks: 'xxxxxxxx' },
      { account: 2515252148, region: '河北省', identity: ' ', remarks: 'yyyyyyyyyyyyyyyyyyy' },
      {
        account: 5223548436,
        region: '湖南省',
        identity: ' ',
        remarks: '改竟然导入工具技师范客户发就开始复合肥看来我'
      },
      {
        account: 5223548436,
        region: '广东省',
        identity: '152326',
        remarks: '南网'
      }
    ])
    // 暂无数据显示与隐藏
    const empty = ref(false)
    if (emptyList.length > 0) {
      empty.value = false
    } else {
      empty.value = true
    }
    // 删除缴费信息
    const DelMyJiaofei = (value) => {
      Dialog.confirm({
        message: '确认删除该户号？'
      })
        .then(() => {
          emptyList.splice(value, 1)
          if (emptyList.length === 0) {
            empty.value = true
          }
          console.log('是的')
        })
        .catch(() => {
          console.log('不了')
        })
    }
    return {
      // 暂无数据显示与隐藏
      empty,
      // 宫格数据
      ftonHomePath,
      // 我的缴费数据
      emptyList,
      myJiaofei,
      // 闪电图标
      shandian,
      // 删除缴费信息
      DelMyJiaofei
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.van-row .van-col {
  width: 100px;
  /* border: 1px solid red; */
}
.Zone_Colour_DIV {
  padding: 0px 0px 15px 0px;
}
.myDIV {
  margin-bottom: 0px;
}
.myRow {
  margin: 15px 10px 0px 10px;
}
.myArrow {
  margin: 15px 0px 0px 0px;
}
.mybeizhu {
  margin: 5px 0px 0px 0px;
}
.delete-button {
  height: 100%;
}
</style>
