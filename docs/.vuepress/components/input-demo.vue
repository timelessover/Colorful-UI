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
          <pre><code class="html">{{baseMethods}}</code></pre>
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
        <cl-input v-model="value1" placeholder="请输入内容" disabled></cl-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{disabled}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>可清空</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-input v-model="value2" placeholder="请输入内容" clearable></cl-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{clearable}}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>密码框</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-input v-model="value3" placeholder="请输入内容" show-password></cl-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{showPassword}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(3)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>带 icon 的输入框</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-input placeholder="请选择日期" suffix-icon="date" v-model="input1"></cl-input>
        <cl-input placeholder="请输入内容" prefix-icon="search" v-model="input2"></cl-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{icon}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(4)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>attributes</h3>
    <p>组件参数说明后期扩展</p>
    <Attributes></Attributes>
  </div>
</template>

<script>
import Icon from "@/icon/icon";
import mixin from "../mixin";
import Input from "@/input/input";
import Attributes from "./input-attributes.vue";
export default {
  name: "input-demo",
  mixins: [mixin],
  components: {
    "cl-icon": Icon,
    "cl-input": Input,
    Attributes
  },
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value3: "",
      input1: "",
      input2: "",
      codeStr: `
          <cl-input v-model="value" type="text"></cl-input>
        `,
      codeStr1: `<cl-input v-model="value" placeholder ="请输入内容" disabled></cl-input>`,
      codeStr2: `<cl-input v-model="value2" placeholder="请输入内容" clearable></cl-input>`,
      codeStr3: `<cl-input v-model="value2" placeholder="请输入内容" show-password></cl-input>`,
      codeStr4: `<cl-input placeholder="请选择日期" suffix-icon="date" v-model="input1"></cl-input>
        <cl-input placeholder="请输入内容" prefix-icon="search" v-model="input2"></cl-input>`
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },
    disabled() {
      return this.trim(this.codeStr1);
    },
    clearable() {
      return this.trim(this.codeStr2);
    },
    showPassword() {
      return this.trim(this.codeStr3);
    },
    icon() {
      return this.trim(this.codeStr4);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>