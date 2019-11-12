<template>
  <div class="cl-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="cl-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="cl-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "cl-card",
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-card {
  font-size: 18px;
  &.box-card {
    width: 480px;
  }
  &.is-always-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .cl-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
    line-height: 28px;
  }
  .cl-card__body {
    padding: 20px;
  }
}
</style>

