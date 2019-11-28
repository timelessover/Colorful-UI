<template>
    <div class="demo">
        <p>将信息聚合在卡片容器中展示</p>
        <h3>基础用法</h3>
        <p>包含标题，内容</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
                </cl-card>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{baseMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(0)">
                <cl-icon class="icon-down" :name="isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
        <Attributes></Attributes>
    </div>
</template>

<script>
import ClIcon from "@/icon/icon";
import mixin from "../mixin";
import ClCard from "@/card/card";
import Attributes from "./card-attributes.vue";
export default {
  name: "backTop-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClCard,
    Attributes
  },
  data() {
    return {
      activeName: "second",
      codeStr: `
<cl-card class="box-card">
    <div slot="header" class="clearfix">
        <span>卡片名称</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
</cl-card>
        `
    };
  },
  computed: {
    baseMethods() {
      return this.codeStr.replace(/^ {20}$/gm,"").trim();
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
</style>