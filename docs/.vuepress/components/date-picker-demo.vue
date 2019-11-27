<template>
    <div class="demo">
        <p>用于选择或输入日期</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-date-picker v-model="value"  placeholder="选择日期"></cl-date-picker>
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
import ClDatePicker from "@/date-picker/date-picker";
import Attributes from "./date-picker-attributes.vue";
export default {
  name: "inputNumber-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClDatePicker,
    Attributes
  },
  data() {
    return {
      value: '',
      codeStr: `
        <cl-date-picker v-model="value"  placeholder="选择日期"></cl-date-picker>
        
data() {
   return {
      value:''
   }
}
        `
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    }
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