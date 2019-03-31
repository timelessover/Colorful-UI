<template>
  <div class="c-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'c-content'
  }
</script>

<style lang="scss" scoped>
  .c-content {
    flex-grow: 1;
  }
</style>