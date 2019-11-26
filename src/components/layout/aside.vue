
<template>
  <aside class="cl-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: "cl-aside",
  props: {
    width: {
      type: String,
      default: "150px"
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-aside {
  position: relative;
}
</style>


