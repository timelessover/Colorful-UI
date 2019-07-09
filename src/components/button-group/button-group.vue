<template>
  <div class="cl-button-group" >
    <slot></slot>
  </div>
</template>
<script>
  const COMPONENT_NAME = 'cl-button-group'
  export default {
    name: COMPONENT_NAME,
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
@import "@/styles/common/base.scss";
</style>