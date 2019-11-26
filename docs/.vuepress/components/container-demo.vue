<template>
    <div class="demo">
        <p>Container 布局容器</p>
        <h3>常见页面布局</h3>
        <p>用于布局的容器组件，方便快速搭建页面的基本结构</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-container>
                    <cl-header height="10vh">Header</cl-header>
                    <cl-container>
                        <cl-aside width="150px">Aside</cl-aside>
                        <cl-main>Main</cl-main>
                    </cl-container>
                    <cl-footer>Footer</cl-footer>
                </cl-container>
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
import ClContainer from "@/layout/container";
import ClHeader from "@/layout/header";
import ClAside from "@/layout/aside";
import ClMain from "@/layout/main";
import ClFooter from "@/layout/footer";
import Attributes from "./container-attributes.vue";
export default {
  mixins: [mixin],
  components: {
    ClIcon,
    ClContainer,
    ClHeader,
    ClMain,
    ClFooter,
    ClAside,
    Attributes
  },
  data() {
    return {
      codeStr: `
<cl-container>
  <cl-header>Header</cl-header>
  <cl-container>
    <cl-aside width="150px">Aside</cl-aside>
    <cl-main>Main</cl-main>
  </cl-container>
  <cl-footer>Footer</cl-footer>
</cl-container>
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

.cl-header,
.cl-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 10vh;
}

.cl-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.cl-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .cl-container {
  margin-bottom: 40px;
}

.cl-container:nth-child(5) .cl-aside,
.cl-container:nth-child(6) .cl-aside {
  line-height: 260px;
}

.cl-container:nth-child(7) .cl-aside {
  line-height: 320px;
}
</style>