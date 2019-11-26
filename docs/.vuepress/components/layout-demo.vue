<template>
    <div class="demo">
        <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
        <h3>基础布局</h3>
        <p>使用单一分栏创建基础的栅格布局。</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-row>
                    <cl-col :span="24">
                        <div class="grid-content bg-purple-dark"></div>
                    </cl-col>
                </cl-row>
                <cl-row>
                    <cl-col :span="12">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="12">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                </cl-row>
                <cl-row>
                    <cl-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="8">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                    <cl-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                </cl-row>
                <cl-row>
                    <cl-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                    <cl-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                </cl-row>
                <cl-row>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                </cl-row>
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
        <h3>分栏间隔</h3>
        <p>分栏之间存在间隔。</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-row :gutter="20">
                    <cl-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                </cl-row>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{gutterMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(1)" ref="xxx">
                <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
        <h3>混合布局</h3>
        <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-row :gutter="20">
                    <cl-col :span="16">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                </cl-row>
                <cl-row :gutter="20">
                    <cl-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                </cl-row>
                <cl-row :gutter="20">
                    <cl-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="16">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                </cl-row>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{mixtureMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(2)" ref="xxx">
                <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
        <h3>分栏偏移</h3>
        <p>支持偏移指定的栏数。</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-row :gutter="20">
                    <cl-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="6" :offset="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                </cl-row>
                <cl-row :gutter="20">
                    <cl-col :span="6" :offset="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :span="6" :offset="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                </cl-row>
                <cl-row :gutter="20">
                    <cl-col :span="12" :offset="6">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                </cl-row>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{offsetMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(3)" ref="xxx">
                <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
        <h3>响应式布局</h3>
        <p>Bootstrap 的响应式设计</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-row :gutter="10">
                    <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                    <cl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                        <div class="grid-content bg-purple"></div>
                    </cl-col>
                    <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                        <div class="grid-content bg-purple-light"></div>
                    </cl-col>
                </cl-row>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{reactiveMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(4)" ref="xxx">
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
import ClRow from "@/row/row";
import ClCol from "@/col/col";
import Attributes from "./layout-attributes.vue";
export default {
  name: "tabs-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClRow,
    ClCol,
    Attributes
  },
  data() {
    return {
      activeName: "second",
      codeStr: `<cl-row>
  <cl-col :span="24"><div class="grid-content bg-purple-dark"></div></cl-col>
</cl-row>
<cl-row>
  <cl-col :span="12"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="12"><div class="grid-content bg-purple-light"></div></cl-col>
</cl-row>
<cl-row>
  <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="8"><div class="grid-content bg-purple-light"></div></cl-col>
  <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
</cl-row>
<cl-row>
  <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="6"><div class="grid-content bg-purple-light"></div></cl-col>
  <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="6"><div class="grid-content bg-purple-light"></div></cl-col>
</cl-row>
<cl-row>
  <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="4"><div class="grid-content bg-purple-light"></div></cl-col>
  <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="4"><div class="grid-content bg-purple-light"></div></cl-col>
  <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="4"><div class="grid-content bg-purple-light"></div></cl-col>
</cl-row>
        `,
      codeStr1: `
<cl-row :gutter="20">
  <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
</cl-row>
        `,
      codeStr2: `
      <cl-row :gutter="20">
  <cl-col :span="16"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
</cl-row>
<cl-row :gutter="20">
  <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
</cl-row>
<cl-row :gutter="20">
  <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="16"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
</cl-row>
      `,
      codeStr3: `
<cl-row :gutter="20">
  <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></cl-col>
</cl-row>
<cl-row :gutter="20">
  <cl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></cl-col>
  <cl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></cl-col>
</cl-row>
<cl-row :gutter="20">
  <cl-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></cl-col>
</cl-row>`,
    codeStr4:`
<cl-row :gutter="10">
    <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></cl-col>
    <cl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></cl-col>
    <cl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></cl-col>
    <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></cl-col>
</cl-row>`
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },
    offsetMethods() {
      return this.trim(this.codeStr3);
    },
    gutterMethods() {
      return this.trim(this.codeStr1);
    },
    mixtureMethods() {
      return this.trim(this.codeStr2);
    },
    reactiveMethods(){
        return this.trim(this.codeStr4);
    }
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab.name;
      console.log(tab);
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.cl-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>