<template>
    <div class="demo">
        <p>表示两种相互对立的状态间的切换，多用于触发「开/关」</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-switch v-model="value" true-color="#13ce66" false-color="#ff4949"></cl-switch>
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
        <h3>文字描述</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-switch v-model="value1" true-text="按月付费" false-text="按年付费"></cl-switch>
                <cl-switch
                    v-model="value2"
                    true-color="#13ce66"
                    false-color="#ff4949"
                    true-text="按月付费"
                    false-text="按年付费"
                ></cl-switch>
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
        <h3>禁用状态</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-switch disabled v-model="value1" true-text="按月付费" false-text="按年付费"></cl-switch>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{textMethods}}</code></pre>
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
import ClSwitch from "@/switch/switch";
import Attributes from "./switch-attributes.vue";
export default {
  name: "tabs-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClSwitch,
    Attributes
  },
  data() {
    return {
      value: true,
      value1: true,
      value2: true,
      codeStr: `
         <cl-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></cl-switch>
        `,
      codeStr1: `
        <cl-switch v-model="value1" true-text="按月付费" false-text="按年付费"></cl-switch>
        <cl-switch
                v-model="value2"
                true-color="#13ce66"
                false-color="#ff4949"
                true-text="按月付费"
                false-text="按年付费"
        ></cl-switch>
      `,
      codeStr2: `
        <cl-switch disabled v-model="value1" true-text="按月付费"  false-text="按年付费"></cl-switch>
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
    textMethods(){
         return this.trim(this.codeStr2);
    }
  },
  mounted() {
    let demoGroup = document.querySelectorAll(".component-wrapper-demo");
    demoGroup.forEach(item => {
      item &&
        item.childNodes.forEach(item => {
          item.classList && item.classList.add("wave");
        });
    });
  }
};
</script>

<style lang="scss" scoped>
.component-wrapper-demo {
  display: flex;
  > .wave {
    margin-right: 20px;
  }
}
</style>