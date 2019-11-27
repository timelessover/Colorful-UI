<template>
  <div class="demo">
    <p>在一组备选项中进行单选</p>
    <h3>基础用法</h3>
    <p>选项默认可见</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-checkbox v-model="checked">备选项</cl-checkbox>
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
        <cl-checkbox disabled v-model="checked">禁用</cl-checkbox>
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
        <cl-checkbox-group v-model="checkList">
          <cl-checkbox label="复选框 A"></cl-checkbox>
          <cl-checkbox label="复选框 B"></cl-checkbox>
          <cl-checkbox label="复选框 C"></cl-checkbox>
          <cl-checkbox label="禁用" disabled></cl-checkbox>
          <cl-checkbox label="选中且禁用" disabled></cl-checkbox>
        </cl-checkbox-group>
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
import ClCheckboxGroup from "@/checkbox/checkbox-group";
import ClCheckbox from "@/checkbox/checkbox";
import Attributes from "./checkbox-attributes.vue";
export default {
  name: "checkbox-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClCheckboxGroup,
    ClCheckbox,
    Attributes
  },
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      checked: true,
      radio3: 3,
      radio1: "选中且禁用",
      codeStr: `
        <cl-checkbox v-model="checked">备选项</cl-checkbox>

data() {
  return {
   checked: true,
  };
},
        `,
      codeStr1: `
        <cl-checkbox disabled v-model="checked">禁用</cl-checkbox>

data() {
  return {
   checked: true,
  };
},
      `,
      codeStr2: `
        <cl-checkbox-group v-model="checkList">
          <cl-checkbox label="复选框 A"></cl-checkbox>
          <cl-checkbox label="复选框 B"></cl-checkbox>
          <cl-checkbox label="复选框 C"></cl-checkbox>
          <cl-checkbox label="禁用" disabled></cl-checkbox>
          <cl-checkbox label="选中且禁用" disabled></cl-checkbox>
        </cl-checkbox-group>

data() {
  return {
   checkList: ["选中且禁用", "复选框 A"],
  };
},
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