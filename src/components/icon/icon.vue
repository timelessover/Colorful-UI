<template>
  <i :class="'cl-icon-' + name"></i>
</template>
<script>
export default {
  name: "cl-icon",
  props: {
    name: String
  }
};
</script>
<style lang="scss" scoped>
</style>