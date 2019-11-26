<template>
  <div class="demo">
    <p>展示小段文本内容</p>
    <h3>基础用法</h3>
    <p>基础的弹出框</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-popover
          position="top"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <cl-button slot="reference">hover 激活</cl-button>
        </cl-popover>
        <cl-popover
          position="bottom"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <cl-button slot="reference">hover 激活</cl-button>
        </cl-popover>
        <cl-popover
          position="left"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <cl-button slot="reference">click 激活</cl-button>
        </cl-popover>
        <cl-popover
          position="right"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <cl-button slot="reference">click 激活</cl-button>
        </cl-popover>
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
import ClPopover from "@/popover/popover";
import ClButton from "@/button/button";
import Attributes from "./popover-attributes.vue";
export default {
  name: "popover-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClPopover,
    ClButton,
    Attributes
  },
  data() {
    return {
      visible: true,
      codeStr: `
         <cl-popover
          position="top"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <cl-button slot="reference">hover 激活</cl-button>
        </cl-popover>
        <cl-popover
          position="bottom"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <cl-button slot="reference">hover 激活</cl-button>
        </cl-popover>
        <cl-popover
          position="left"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <cl-button slot="reference">click 激活</cl-button>
        </cl-popover>
        <cl-popover
          position="right"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <cl-button slot="reference">click 激活</cl-button>
        </cl-popover>
        `
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    }
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab.name;
      console.log(tab);
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