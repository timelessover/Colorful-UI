<template>
  <div
    class="cl-tab-pane"
    v-show="isShow"
  >
    {{name}}
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

    data() {
      return {
        index: null,
        loaded: false,
        // isShow: true
      };
    },
    

    computed: {
      isShow(){
        if(this.name == this.$parent.index + ''){
          return true
        }else{
          return false
        }
      }
    },
    

    updated() {
      this.$parent.$emit('tab-nav-update');
    }
  };
</script>
<style lang="scss" scoped>
cl-tab-pane{
  height: 50px;
  width: 50px;
  background: blue;
}
</style>
