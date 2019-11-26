<template>
    <div class="demo">
        <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒</p>
        <h3>基础用法</h3>
        <p>从顶部出现，3 秒后自动消失。</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-button @click="open">消息提示</cl-button>
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
        <h3>不同状态</h3>
        <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-button @click="open1">成功</cl-button>
                <cl-button @click="open2">警告</cl-button>
                <cl-button @click="open3">错误</cl-button>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{diffMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(1)" ref="xxx">
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
import ClButton from "@/button/button";
import toast from "@/toast";
import Attributes from "./toast-attributes.vue";
export default {
  name: "toast-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClButton,
    Attributes
  },
  data() {
    return {
      codeStr: `
        <cl-button @click="open">消息提示</cl-button>
methods: {
 open() {
    this.$message('这是一条消息提示');
    }
}`,
    codeStr1:`
        <cl-button @click="open1">成功</cl-button>
<cl-button @click="open2">警告</cl-button>
<cl-button @click="open3">错误</cl-button>
methods:{
 open1() {
    this.$toast({
       message: '恭喜你，这是一条成功消息',
       type: 'success'
     });
    },
 open2() {
    this.$toast({
       message: '警告哦，这是一条警告消息',
       type: 'warning'
     });
    },
 open3() {
    this.$toast.error('错了哦，这是一条错误消息');
    }
}
`
    };
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },
    diffMethods() {
      return this.trim(this.codeStr1);
    },
    $toast() {
      return toast;
    }
  },
  methods: {
    open() {
      this.$toast("这是一条消息提示");
    },
    open1() {
      this.$toast({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
    },
    open2() {
      this.$toast({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
    },
    open3() {
       this.$toast.error('错了哦，这是一条错误消息');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>