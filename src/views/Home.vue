<template>
  <div id="home">
    <div class="button-demo">
      <cl-button iconPosition="left" icon="refresh" :loading="flag1">{{msg}}</cl-button>
      <cl-button :loading="loading" @click="flag">{{msg}}</cl-button>
      <cl-button-group>
        <cl-button icon="arrow-left">上一页</cl-button>
        <cl-button icon="arrow-right" iconPosition="right">下一页</cl-button>
      </cl-button-group>
      <cl-back-top :bottom="100" :right="50"></cl-back-top>
      <cl-input v-model="value" type="text" clearable></cl-input>
      <cl-collapse>
        <cl-collapse-item name="1"></cl-collapse-item>
        <cl-collapse-item name="2"></cl-collapse-item>
        <cl-collapse-item name="3" title="45646"></cl-collapse-item>
      </cl-collapse>
      <cl-tabs @tabs="handleClick">
        <cl-tab-pane label="用户管理" name= "0">用户管理</cl-tab-pane>
        <cl-tab-pane label="配置管理" name= "1">配置管理</cl-tab-pane>
        <cl-tab-pane label="角色管理" name= "2">角色管理</cl-tab-pane>
        <cl-tab-pane label="哈哈哈" name= "3">哈哈哈</cl-tab-pane>
      </cl-tabs>
      <cl-input-number v-model="value" @change="handleChange"></cl-input-number>
    </div>
  </div>
</template>
<script>
import Button from "@/components/button/button";
import ButtonGroup from "@/components/button-group/button-group";
import BackTop from "@/components/backtop/backtop";
import Input from "@/components/input/input";
import Collapse from "@/components/collapse/collapse";
import CollapseItem from "@/components/collapse/collapse-item";
import Tabs from "@/components/tabs/tabs";
import Pane from "@/components/tabs/tab-pane";
import InputNumber from '@/components/input-number/input-number.vue';
import axios from "axios";

export default {
  components: {
    "cl-button": Button,
    "cl-button-group": ButtonGroup,
    "cl-back-top": BackTop,
    "cl-input": Input,
    "cl-collapse": Collapse,
    "cl-collapse-item": CollapseItem,
    "cl-tabs": Tabs,
    "cl-tab-pane": Pane,
    "cl-input-number": InputNumber
  },
  data() {
    return {
      msg: "确定",
      loading: false,
      flag1: true,
      flag2: true,
      errorMsg: "用户名错误",
      value: 5,
      list:[{name:'chris',age: 18},{name: 'james',age:30}]
    };
  },
  created() {},
  watch: {
  },
  methods: {
    flag() {
      this.loading = !this.loading;
    },
    handleClick(tab, event) {
      console.log(tab);
    },
    handleChange(value) {
        console.log(value);
      }
  }
};
</script>
<style lang="scss" scoped>
</style>