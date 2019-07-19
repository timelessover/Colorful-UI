// <el-dropdown>
//   <span class="el-dropdown-link">
//     下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
//   </span>
//   <el-dropdown-menu slot="dropdown">
//     <el-dropdown-item>黄金糕</el-dropdown-item>
//     <el-dropdown-item>狮子头</el-dropdown-item>
//     <el-dropdown-item>螺蛳粉</el-dropdown-item>
//     <el-dropdown-item disabled>双皮奶</el-dropdown-item>
//     <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
//   </el-dropdown-menu>
// </el-dropdown>


<template>
    <div class="cl-dropdown">
        <slot></slot>
        <slot name="dropdown"></slot>
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      triggerElm: null,
      visable: false,
      popoverElm: null
    };
  },
  provide() {
    return {
      dropdown: this
    };
  },
  created() {},
  methods: {
    initEvent() {
      let show = this.show;
      let hide = this.hide;
      this.triggerElm = this.$slots.default[0].elm;
      this.popoverElm = this.$slots.dropdown[0].elm;
      this.triggerElm.addEventListener("mouseenter", show);
      this.triggerElm.addEventListener("mouseleave", hide);
      this.popoverElm.addEventListener("mouseenter", show);
      this.popoverElm.addEventListener("mouseleave", hide);
    },
    show() {
      this.visable = true;
    },
    hide() {
      this.visable = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>