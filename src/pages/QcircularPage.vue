<template>
  <q-page padding class="q-pa-xl">
    <q-circular-progress
      show-value
      :value="80"
      size="180px"
      color="indigo"
      font-size="16px"
      :thickness="0.3"
      track-color="indigo-2"
      center-color="indigo-1"
      :indeterminate="true"
    >
      <div class="q-pa-lg text-center">course completion</div>
    </q-circular-progress>

    <!-- <q-circular-progress
      class="q-ml-md"
      :value="9"
      有顏色範圍的數值
      :min="0"
      可以設定最小值
      :max="10"
      可以設定最大值
      size="80px"
      圓圈的尺寸
      color="indigo"
      顏色
      :thickness="0.3"
      轉的速度
      track-color="indigo-2"
      缺口的顏色
      center-color="indigo-1"
      中心的顏色
      reverse
      反方向
      angle="180"
      開始的地方轉多少度
      instant-feedback
      刪除動畫
      show-value
      在中間顯示值，可以寫在下方
      *:indeterminate="true"
      *
      控制要不要動畫
    >
      <q-icon name="volume_up"></q-icon>
    </q-circular-progress> -->
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
