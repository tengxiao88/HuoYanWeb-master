<!--选择器封装-->
<template>
  <div class="Ppicker">
    <van-picker item-height="5.5vh" :columns="columns" @confirm="onConfirm" @cancel="onCancel" />
  </div>
</template>

<script>
export default {
  name: 'PickerKong',
  setup(props, { emit }) {
    const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']
    const onConfirm = (value, index) => {
      const arr = [{ index, region: value }]
      emit('onConfirm', arr)
    }
    const onCancel = () => {
      emit('onCancel')
    }
    return {
      columns,
      onCancel,
      onConfirm
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .van-picker {
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  box-shadow: 0 0 2px #dcdcdc;
} */
</style>
