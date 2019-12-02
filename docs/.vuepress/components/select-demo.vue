<template>
    <div class="demo">
        <p>当选项过多时，使用下拉菜单展示并选择内容</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-select v-model="value" placeholder="请选择">
                    <cl-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></cl-option>
                </cl-select>
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
import ClSelect from "@/select/select";
import ClOption from "@/select/option";
import Attributes from "./select-attributes.vue";
export default {
  name: "select-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClSelect,
    ClOption,
    Attributes
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      codeStr: `
        <cl-select v-model="value" placeholder="请选择">
                <cl-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></cl-option>
        </cl-select>
        `
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    }
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