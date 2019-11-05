
<template>
  <aside class="cl-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: "cl-sider",
  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-aside {
  position: relative;
}
</style>


