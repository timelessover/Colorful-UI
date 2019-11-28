<template>
    <div class="demo">
        <p>显示当前页面的路径，快速返回之前的任意页面</p>
        <h3>基础用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-breadcrumb separator="/">
                    <cl-breadcrumb-item :to="{ path: '/' }">首页</cl-breadcrumb-item>
                    <cl-breadcrumb-item>
                        <a href="/">活动管理</a>
                    </cl-breadcrumb-item>
                    <cl-breadcrumb-item>活动列表</cl-breadcrumb-item>
                    <cl-breadcrumb-item>活动详情</cl-breadcrumb-item>
                </cl-breadcrumb>
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
import ClBreadcrumb from "@/breadcrumb/breadcrumb";
import ClBreadcrumbItem from "@/breadcrumb/breadcrumb-item";
import Attributes from "./breadcrumb-attributes.vue";
export default {
  name: "breadcrumb-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClBreadcrumb,
    ClBreadcrumbItem,
    Attributes
  },
  data() {
    return {
      activeName: "second",
      codeStr: `
<cl-breadcrumb separator="/">
    <cl-breadcrumb-item :to="{ path: '/' }">首页</cl-breadcrumb-item>
    <cl-breadcrumb-item>
        <a href="/">活动管理</a>
    </cl-breadcrumb-item>
    <cl-breadcrumb-item>活动列表</cl-breadcrumb-item>
    <cl-breadcrumb-item>活动详情</cl-breadcrumb-item>
</cl-breadcrumb>
        `
    };
  },
  computed: {
    baseMethods() {
      return this.codeStr.replace(/^ {20}$/gm,"").trim();
    }
  }
};
</script>

<style lang="scss" scoped>
.content__default {
  height: 300vh;
}
</style>