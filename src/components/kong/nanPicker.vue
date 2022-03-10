<!--选择器封装-->
<template>
  <div class="Ppicker">
    <van-picker
      item-height="5.5vh"
      :columns="columns"
      @confirm="nanonConfirm"
      @cancel="nanonCancel"
    />
  </div>
</template>

<script>
export default {
  name: 'PickerKong',
  setup(props, { emit }) {
    const columns = ['广东', '广西', '贵州', '海南', '云南']
    const nanonConfirm = (value, index) => {
      const arr = [{ index, region: value }]
      emit('onConfirm', arr)
    }
    const nanonCancel = () => {
      emit('onCancel')
    }
    return {
      columns,
      nanonCancel,
      nanonConfirm
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
