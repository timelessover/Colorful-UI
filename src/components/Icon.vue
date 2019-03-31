<template>
  <svg class="c-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import '../utils/svg.js'
  export default {
    name: 'c-icon',
    props: ['name']
  }
</script>
<style lang="scss" scoped>
  .c-icon {width: 1em; height: 1em; }
</style>