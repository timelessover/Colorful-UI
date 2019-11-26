<template>
  <div class="demo">
    <p>返回页面顶部的操作按钮</p>
    <h3>基础用法</h3>
    <p>滑动页面即可看到右下方的按钮</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <span>向下滚动右下角可见</span>
        <cl-backtop visibility-height="100"></cl-backtop>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{baseMethods}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <cl-icon class="icon-down" :name="isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
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
import ClBacktop from "@/backtop/backtop";
import Attributes from "./backTop-attributes.vue";
export default {
  name: "backTop-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClBacktop,
    Attributes
  },
  data() {
    return {
      activeName: "second",
      codeStr: `
        <cl-backtop target=".theme-container" visibilityHeight="100"></cl-backtop>
        `
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },
  },
};
</script>

<style lang="scss" scoped>
.content__default{
    height: 300vh;
}
</style>