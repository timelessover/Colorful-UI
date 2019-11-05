<template>
  <div :class="classObjet" >
    <TabNav ></TabNav>
    <slot></slot>
  </div>
</template>


    

<script>
import TabNav from "./tab-nav";
import TabBar from "./tab-bar";

export default {
  name: "cl-tabs",
  props: {
    activeName:{
      type:String,
    },
    value: {}
  },
  components: {
    TabNav,
    TabBar
  },
  provide() {
    return {
      rootTabs: this
    };
  },
  computed: {
    classObjet() {
      return [
        "cl-tabs"
      ];
    }
  },

  methods: {
    handleCick(e){
      this.$emit('tab-click',e)
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-tabs{
  height:200px;
  width:500px;
  padding:15px;
}
</style>

