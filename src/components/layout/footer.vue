
<template>
  <footer class="cl-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'cl-footer',
  props: {
      height: {
        type: String,
        default: '10vh'
      }
  }
}
</script>
<style lang="scss" scoped>
</style>


