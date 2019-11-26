<template>
  <div class="demo">
    <p>常用的操作按钮</p>
    <h3>基础用法</h3>
    <p>基础的按钮用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-button>默认按钮</cl-button>
        <cl-button type="primary">主要按钮</cl-button>
        <cl-button type="success">成功按钮</cl-button>
        <cl-button type="danger">危险按钮</cl-button>
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
    <p>按钮不可用状态</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-button disabled>默认按钮</cl-button>
        <cl-button type="primary" disabled>主要按钮</cl-button>
        <cl-button type="success" disabled>成功按钮</cl-button>
        <cl-button type="danger" disabled>危险按钮</cl-button>
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
    <h3>图标按钮</h3>
    <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-button type="primary" icon="setting"></cl-button>
        <cl-button type="danger" icon="delete"></cl-button>
        <cl-button type="success" icon="success"></cl-button>
        <cl-button icon="search">搜索</cl-button>
        <cl-button type="primary" icon="upload" iconPosition="right">上传</cl-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{withIcon}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>按钮组</h3>
    <p>以按钮组的方式出现，常用于多项类似操作</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-button-group>
          <cl-button type="primary" icon="arrow-left">上一页</cl-button>
          <cl-button type="primary" icon="arrow-right" iconPosition="right">下一页</cl-button>
        </cl-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{withIcon}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(3)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>加载中</h3>
    <p>点击按钮后进行数据加载操作，在按钮上显示加载状态</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <cl-button type="primary" loading>加载中</cl-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{withLoading}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(5)" ref="xxx">
        <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <Attributes></Attributes>
  </div>
</template>

<script>
import Icon from "@/icon/icon";
import mixin from "../mixin";
import Button from "@/button/button";
import ButtonGroup from "@/button-group/button-group";
import Attributes from "./button-attributes.vue";
export default {
  mixins: [mixin],
  components: {
    "cl-icon": Icon,
    "cl-button": Button,
    "cl-button-group": ButtonGroup,
    Attributes
  },
  data() {
    return {
      codeStr: `
         <cl-button>默认按钮</cl-button>
        <cl-button type="primary">主要按钮</cl-button>
        <cl-button type="success">危险按钮</cl-button>
        <cl-button type="danger">危险按钮</cl-button>
        `,
      codeStr1: `
         <cl-button disabled>默认按钮</cl-button>
        <cl-button type="primary" disabled>主要按钮</cl-button>
        <cl-button type="success" disabled>成功按钮</cl-button>
        <cl-button type="danger" disabled>危险按钮</cl-button>
        `,
      codeStr2: `
      <cl-button type="primary" icon="setting"></cl-button>
        <cl-button type="danger" icon="delete"></cl-button>
        <cl-button type="success" icon="success"></cl-button>
        <cl-button  icon="search">搜索</cl-button>
        <cl-button type="primary" icon="upload" iconPosition="right">上传</cl-button>`,
      codeStr3: `
     <cl-button type="primary" loading>加载中</cl-button>`
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },
    disabled() {
      return this.trim(this.codeStr1);
    },
    withIcon() {
      return this.trim(this.codeStr2);
    },
    withLoading() {
      return this.trim(this.codeStr3);
    }
  },
  mounted() {
    let demoGroup = document.querySelectorAll(".component-wrapper-demo");
      demoGroup.forEach(item => {
        item && item.childNodes.forEach(item => {
          item.classList&&item.classList.add("wave");
        });
      });

  },
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