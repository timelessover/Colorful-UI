<template>
    <div class="demo">
        <p>将页面元素钉在可视范围</p>
        <h3>基础用法</h3>
        <p>当内容区域比较长，需要滚动页面时</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-affix :distance="60">
                    <div class="box">Affix</div>
                </cl-affix>
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
import ClAffix from "@/affix/affix";
import Attributes from "./affix-attributes.vue";
export default {
  name: "affix-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClAffix,
    Attributes
  },
  data() {
    return {
      codeStr: `
       <cl-affix :distance="60">
            <div class="box">Affix</div>
        </cl-affix>
        `
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #1890ff;
  font-size: 18px;
  color: rgb(255, 255, 255);
}
.component-wrapper-demo{
    height:50vh;
}
</style>