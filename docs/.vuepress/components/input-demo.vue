<template>
  <div class="demo">
    <p>通过鼠标或键盘输入字符</p>
    <h3>基本用法</h3>
    <p>输入框基本用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
       <cl-input v-model="value" type="text"></cl-input>
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
     <h3>禁用状态</h3>
    <p>输入框不可用状态</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-input v-model="value" type="phone" placeholder ="请输入内容" disabled></cl-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{disabled}}</code></pre>
        </div>
      </div>

    <h3>attributes</h3>
    <p>组件参数说明后期扩展</p>
  </div>
</template>

<script>
import Icon from "../../../src/components/icon/icon";
import mixin from "../mixin";
import Input from "../../../src/components/input/input";
export default {
  name: "input-demo",
  mixins: [mixin],
  components: {
    "cl-icon": Icon,
    "cl-input": Input 
  },
  data() {
    return { 
      value:'',
      codeStr: `
          <cl-input v-model="value" type="text"></cl-input>
        `
        .replace(/^\s*/gm, "")
        .trim()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>