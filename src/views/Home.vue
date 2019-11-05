<template>
  <div id="home">
    <cl-tabs v-model="activeName" @tab-click="handleClick">
      <cl-tab-pane label="用户管理" name="first">用户管理</cl-tab-pane>
      <cl-tab-pane label="配置管理" name="second">配置管理</cl-tab-pane>
      <cl-tab-pane label="角色管理" name="third">角色管理</cl-tab-pane>
      <cl-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</cl-tab-pane>
    </cl-tabs>
  </div>
</template>
<script>
import ClButton from "@/components/button/button";
import ClTabs from "@/components/tabs/tabs";
import ClTabPane from "@/components/tabs/tab-pane";
// import ClFooter from "@/components/tabs/footer";
// import ClHeader from "@/components/tabs/header";
// import ClMain from "@/components/tabs/main";

export default {
  components: {
    ClButton,
    ClTabs,
    ClTabPane
  },
  data() {
    return {
      flag: true,
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab.name
      console.log(tab);
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cl-dropdown-link {
  height: 50px;
  width: 100px;
  background: blue;
}
#home {
  height: 200vh;
}
.cl-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.cl-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>