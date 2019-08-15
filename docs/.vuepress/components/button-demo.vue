<template>
  <div class="demo">
    <h2>创建组件文档模板</h2>
    <p>组件描述</p>
    <h3>组件功能名字</h3>
    <p>组件功能描述</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-button>默认按钮</cl-button>
        <cl-button :loading="true">loading</cl-button>
        <cl-button disabled>禁用</cl-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div>-->
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h3>attributes</h3>
    <p>组件参数说明后期扩展</p>
  </div>
</template>

<script>
import Icon from "../../../src/components/icon/icon";
import mixin from "../mixin";
import Button from "../../../src/components/button/button";
export default {
  name: "demo",
  mixins: [mixin],
  components: {
    "cl-icon": Icon,
    "cl-button": Button
  },
  data() {
    return {
      codeStr: `
          <cl-button>默认按钮</cl-button>
        <cl-button :loading = true>loading</cl-button>
        `
        .replace(/^\s*/gm, "")
        .trim()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>