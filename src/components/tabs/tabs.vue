//1.tab-nav tab-pane tab-bar 点击后通知其他组件
// <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>


<template>
  <div :class="classObjet" >
    <TabNav></TabNav>
    <slot></slot>
  </div>
</template>


    

<script>
import TabNav from "./tab-nav";

export default {
  name: "cl-tabs",
  props: {},
  components: {
    TabNav,
  },
  provide() {
    return {
      rootTabs: this
    };
  },

  data() {
    return {
      currentName: this.value || this.activeName,
      panes: [],
      index: 0
    };
  },

  watch: {
  },
  computed: {
    classObjet() {
      return [
        "cl-tabs"
      ];
    }
  },
  created () {
    // console.log(this)
  },
  methods: {
    handleCick(){
      this.$emit('tabs')
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-tabs{
  height:200px;
  width:500px;
  background: red;
}
</style>

