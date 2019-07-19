//   <el-dropdown-menu slot="dropdown">
//     <el-dropdown-item>黄金糕</el-dropdown-item>
//     <el-dropdown-item>狮子头</el-dropdown-item>
//     <el-dropdown-item>螺蛳粉</el-dropdown-item>
//     <el-dropdown-item>双皮奶</el-dropdown-item>
//     <el-dropdown-item>蚵仔煎</el-dropdown-item>
//   </el-dropdown-menu>

<template>
    <div class="cl-dropdown-menu" v-show="isVisable">
        <slot></slot>
    </div>
</template>

<script>
export default {
  inject: ["dropdown"],
  data() {
    return {
      item: "value"
    };
  },
  created() {
    console.log(this.$slots.default);
  },
  computed: {
    isVisable() {
      return this.dropdown.visable;
    }
  },
  mounted() {
    this.dropdown.initEvent();
  },
  methods: {
    getItems() {}
  }
};
</script>

<style lang="scss" scoped>
</style>