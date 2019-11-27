<template>
    <div class="demo">
        <p>在一组备选项中进行单选</p>
        <h3>基础用法</h3>
        <p>选项默认可见</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-input-number v-model="num" @change="handleChange" :min="1" :max="10"></cl-input-number>
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
import ClInputNumber from "@/input-number/input-number";
import Attributes from "./inputNumber-attributes.vue";
export default {
  name: "inputNumber-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClInputNumber,
    Attributes
  },
  data() {
    return {
      num: 1,
      codeStr: `
        <cl-input-number v-model="num" @change="handleChange" :min="1" :max="10"></cl-input-number>
        
methods: {
   handleChange(value) {
    this.num = value;
   }
}
        `
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },
  },
  methods: {
    handleChange(value) {
      this.num = value;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>