
<template>
  <div class="cl-header" :style="{ height }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "cl-header",
  props: {
    height: {
      type: String,
      default: "10vh"
    }
  }
};
</script>
<style lang="scss" scoped>
</style>


