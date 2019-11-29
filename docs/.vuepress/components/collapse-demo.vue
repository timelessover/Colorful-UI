<template>
    <div class="demo">
        <p>通过折叠面板收纳内容区域</p>
        <h3>手风琴效果</h3>
        <p>每次只能展开一个面板</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-collapse v-model="activeNames" @change="handleChange">
                    <cl-collapse-item title="电影" name="1">
                        <div>很棒的组件</div>
                        <div>自动闭合</div>
                    </cl-collapse-item>
                    <cl-collapse-item title="动漫" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        <div>自动闭合</div>
                        <div>自动闭合</div>
                        <div>自动闭合</div>
                    </cl-collapse-item>
                    <cl-collapse-item title="游戏" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </cl-collapse-item>
                    <cl-collapse-item title="电视剧" name="4">
                        <div>好看</div>
                        <div>自动闭合</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </cl-collapse-item>
                </cl-collapse>
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
import ClCollapse from "@/collapse/collapse";
import ClCollapseItem from "@/collapse/collapse-item";
import Attributes from "./collapse-attributes.vue";
export default {
  name: "backTop-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClCollapse,
    ClCollapseItem,
    Attributes
  },
  data() {
    return {
      activeNames: ["1"],
      codeStr: `
<cl-collapse v-model="activeNames" @change="handleChange">
        <cl-collapse-item title="电影" name="1">
            <div>很棒的组件</div>
            <div>自动闭合</div>
        </cl-collapse-item>
        <cl-collapse-item title="动漫" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            <div>自动闭合</div>
            <div>自动闭合</div>
            <div>自动闭合</div>
        </cl-collapse-item>
        <cl-collapse-item title="游戏" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </cl-collapse-item>
        <cl-collapse-item title="电视剧" name="4">
            <div>好看</div>
            <div>自动闭合</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </cl-collapse-item>         
</cl-collapse>

data() {
    return {
        activeNames: ['1']
    };
},
methods: {
    handleChange(val) {
        console.log(val);
    }
}
        `
    };
  },
  computed: {
    baseMethods() {
      return this.codeStr.replace(/^ {20}$/gm, "").trim();
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
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