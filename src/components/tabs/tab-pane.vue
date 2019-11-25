<template>
  <div
    class="cl-tab-pane"
    v-show="isShow"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'cl-tab-pane',

    componentName: 'cl-tab-pane',

    props: {
      name:{
        type: String
      }
    },
    computed: {
      isShow(){
        if(this.name == this.$parent.value) return true
      }
    },
  };
</script>
<style lang="scss" scoped>
.cl-tab-pane{
  background: #fff;
}
</style>
