<template>
  <div class="cl-container" :class="containerClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cl-container',
  data() {
    return {
      containerClass: {
        hasAside: false
      }
    }
  },
  mounted () {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'cl-aside') {
        this.containerClass.hasSider = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/index.scss';
  .cl-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasAside {
      flex-direction: row;
    }
  }
</style>


