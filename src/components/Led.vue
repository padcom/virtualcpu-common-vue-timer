<template>
  <div class="outer-circle" :style="{
    width: `${size}px`,
    height: `${size}px`,
    borderColor: borderColor
  }">
    <div class="inner-circle" v-show="state" :style="{ background: color }"></div>
  </div>
</template>

<script>
export default {
  props: {
    state: { type: [Boolean, String], default: false },
    color: { type: String, default: 'green' },
    borderColor: { type: String, default: '#385a94' },
    size: { type: [Number, String], default: 24 },
  }
}
</script>

<style scoped>
.outer-circle {
  display: inline-block;
  background-color: yellow;
  width: 100px;
  height: 100px;
  padding: 2px;
  border: solid 2px;
  border-radius: 50%;
}
.inner-circle {
  box-sizing: border-box;
  background-color: green;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
