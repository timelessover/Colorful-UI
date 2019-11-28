<template>
    <div class="demo">
        <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
        <h3>确认消息</h3>
        <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-button @click="open">弹框</cl-button>
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
import ClButton from "@/button/button";
import messageBox from "@/message-box";
import toast from "@/toast";
import Attributes from "./message-box-attributes.vue";
export default {
  name: "message-demo",
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
 this.$message({
        message: "这是一条消息提示"
      }).then(res => {
        this.$toast({
                message: "操作成功",
                type: "success"
            });
        })
        .catch(e => {
            this.$toast({
                message: "取消操作",
                type: "warning"
            });
        });
}`
    };
  },
  computed: {
    baseMethods() {
       return this.codeStr.replace(/^ {20}/gm, '').trim()
    },
    $toast() {
      return toast;
    },
    $message() {
      return messageBox.confirm;
    }
  },
  methods: {
    open() {
      this.$message({
        message: "这是一条消息提示"
      })
        .then(res => {
          this.$toast({
            message: "操作成功",
            type: "success"
          });
        })
        .catch(e => {
          this.$toast({
            message: "取消操作",
            type: "warning"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>