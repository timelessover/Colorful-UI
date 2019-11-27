<template>
    <div class="demo">
        <p>在一组备选项中进行单选</p>
        <h3>基础用法</h3>
        <p>选项默认可见</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-radio v-model="radio" label="1">备选项</cl-radio>
                <cl-radio v-model="radio" label="2">备选项</cl-radio>
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
        <p>单选框不可用的状态</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-radio disabled v-model="radio1" label="禁用">备选项</cl-radio>
                <cl-radio disabled v-model="radio1" label="选中且禁用">备选项</cl-radio>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{disabledMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(1)" ref="xxx">
                <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
        <h3>单选框组</h3>
        <p>适用于在多个互斥的选项中选择的场景</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-radio-group v-model="radio3">
                    <cl-radio :label="3">备选项</cl-radio>
                    <cl-radio :label="6">备选项</cl-radio>
                    <cl-radio :label="9">备选项</cl-radio>
                </cl-radio-group>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{groupMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(2)" ref="xxx">
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
import ClRadioGroup from "@/radio/radio-group";
import ClRadio from "@/radio/radio";
import Attributes from "./radio-attributes.vue";
export default {
  name: "tabs-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClRadioGroup,
    ClRadio,
    Attributes
  },
  data() {
    return {
      radio: 1,
      radio3: 3,
      radio1: "选中且禁用",
      codeStr: `
        <cl-radio v-model="radio" label="1">备选项</cl-radio>
        <cl-radio v-model="radio" label="2">备选项</cl-radio>
        `,
      codeStr1: `
        <cl-radio disabled v-model="radio1" label="禁用">备选项</cl-radio>
        <cl-radio disabled v-model="radio1" label="选中且禁用">备选项</cl-radio>
      `,
      codeStr2: `
        <cl-radio-group v-model="radio3">
            <cl-radio :label="3">备选项</cl-radio>
            <cl-radio :label="6">备选项</cl-radio>
            <cl-radio :label="9">备选项</cl-radio>
        </cl-radio-group>
      `
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },
    disabledMethods() {
      return this.trim(this.codeStr1);
    },
    groupMethods() {
      return this.trim(this.codeStr2);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>