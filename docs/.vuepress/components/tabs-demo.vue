<template>
  <div class="demo">
    <p>分隔内容上有关联但属于不同类别的数据集合</p>
    <h3>基础用法</h3>
    <p>基础的标签页</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-tabs v-model="activeName" @tab-click="handleClick">
          <cl-tab-pane label="用户" name="first">用户</cl-tab-pane>
          <cl-tab-pane label="配置" name="second">配置</cl-tab-pane>
          <cl-tab-pane label="角色" name="third">角色</cl-tab-pane>
          <cl-tab-pane label="非常长的字段" name="fourth">非常长的字段</cl-tab-pane>
        </cl-tabs>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{baseMethods}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <Attributes></Attributes>
  </div>
</template>

<script>
import ClIcon from "@/icon/icon";
import mixin from "../mixin";
import ClTabs from "@/tabs/tabs";
import ClTabPane from "@/tabs/tab-pane";
import Attributes from "./tabs-attributes.vue";
export default {
  name: "tabs-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClTabs,
    ClTabPane,
    Attributes
  },
  data() {
    return {
      activeName: "second",
      codeStr: `
        <cl-tabs v-model="activeName" @tab-click="handleClick">
          <cl-tab-pane label="用户" name="first">用户</cl-tab-pane>
          <cl-tab-pane label="配置" name="second">配置</cl-tab-pane>
          <cl-tab-pane label="角色" name="third">角色</cl-tab-pane>
          <cl-tab-pane label="非常长的字段" name="fourth">非常长的字段</cl-tab-pane>
        </cl-tabs>
        `
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab.name;
      console.log(tab);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>