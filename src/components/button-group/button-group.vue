<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'c-buttongroup',
    mounted () {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`c-button-group 的子元素应该全是 c-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../../styles/button-group";
</style>