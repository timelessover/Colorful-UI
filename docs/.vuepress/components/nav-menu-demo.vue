<template>
    <div class="demo">
        <p>为网站提供导航功能的菜单</p>
        <h3>基础用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-menu :selected-index.sync="selected">
                    <cl-menu-item name="home" index="1">首页</cl-menu-item>
                    <cl-sub-menu index="2" name="about">
                        <template slot="title">关于</template>
                        <cl-menu-item name="culture" index="2-1">企业文化</cl-menu-item>
                        <cl-menu-item name="developers" index="2-2">开发团队</cl-menu-item>
                        <cl-menu-item name="contacts" index="2-3">联系方式</cl-menu-item>
                    </cl-sub-menu>
                    <cl-sub-menu name="hire" index="3">
                        <template slot="title">招聘</template>
                        <cl-menu-item name="font" index="3-1">前端开发</cl-menu-item>
                        <cl-menu-item name="back" index="3-2">后端维护</cl-menu-item>
                        <cl-menu-item name="sale" index="3-3">销售团队</cl-menu-item>
                    </cl-sub-menu>
                </cl-menu>
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
        <h3>侧栏</h3>
        <p>垂直菜单，可内嵌子菜单</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-menu :selected-index.sync="selected1" vertical>
                    <cl-menu-item name="home" index="1">首页</cl-menu-item>
                    <cl-sub-menu index="2" name="about">
                        <template slot="title">关于</template>
                        <cl-menu-item name="culture" index="2-1">企业文化</cl-menu-item>
                        <cl-menu-item name="developers" index="2-2">开发团队</cl-menu-item>
                        <cl-menu-item name="contacts" index="2-3">联系方式</cl-menu-item>
                    </cl-sub-menu>
                    <cl-sub-menu name="hire" index="3">
                        <template slot="title">招聘</template>
                        <cl-menu-item name="font" index="3-1">前端开发</cl-menu-item>
                        <cl-menu-item name="back" index="3-2">后端维护</cl-menu-item>
                        <cl-menu-item name="sale" index="3-3">销售团队</cl-menu-item>
                    </cl-sub-menu>
                </cl-menu>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{vertical}}</code></pre>
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
import ClMenu from "@/nav-menu/menu";
import ClMenuItem from "@/nav-menu/menu-item";
import ClSubMenu from "@/nav-menu/sub-menu";
import Attributes from "./nav-menu-attributes.vue";
export default {
  name: "message-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClSubMenu,
    ClMenuItem,
    ClMenu,
    Attributes
  },
  data() {
    return {
      selected: "1",
      selected1: "2-1",
      codeStr: `
<cl-menu :selected-index.sync="selected">
    <cl-menu-item name="home" index="1">首页</cl-menu-item>
      <cl-sub-menu index="2" name="about">
        <template slot="title">关于</template>
            <cl-menu-item name="culture" index="2-1">企业文化</cl-menu-item>
            <cl-menu-item name="developers" index="2-2">开发团队</cl-menu-item>
            <cl-menu-item name="contacts" index="2-3">联系方式</cl-menu-item>
        </cl-sub-menu>
        <cl-sub-menu name="hire" index="3">
            <template slot="title">招聘</template>
            <cl-menu-item name="font" index="3-1">前端开发</cl-menu-item>
            <cl-menu-item name="back" index="3-2">后端维护</cl-menu-item>
            <cl-menu-item name="sale" index="3-3">销售团队</cl-menu-item>
        </cl-sub-menu>
</cl-menu>

data () {
  return {
    selected: '1'
  }
}
`,
 codeStr1: `
<cl-menu :selected-index.sync="selected">
    <cl-menu-item name="home" index="1">首页</cl-menu-item>
      <cl-sub-menu index="2" name="about">
        <template slot="title">关于</template>
            <cl-menu-item name="culture" index="2-1">企业文化</cl-menu-item>
            <cl-menu-item name="developers" index="2-2">开发团队</cl-menu-item>
            <cl-menu-item name="contacts" index="2-3">联系方式</cl-menu-item>
        </cl-sub-menu>
        <cl-sub-menu name="hire" index="3">
            <template slot="title">招聘</template>
            <cl-menu-item name="font" index="3-1">前端开发</cl-menu-item>
            <cl-menu-item name="back" index="3-2">后端维护</cl-menu-item>
            <cl-menu-item name="sale" index="3-3">销售团队</cl-menu-item>
        </cl-sub-menu>
</cl-menu>

data () {
  return {
    selected1: '2-1'
  }
}
`

    };
  },
  computed: {
    baseMethods() {
      return this.codeStr.replace(/^ {20}/gm, "").trim();
    },
    vertical(){
        return this.codeStr1.replace(/^ {20}/gm, "").trim();
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