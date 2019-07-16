<template>
  <div id="home">
    <div class="button-demo">
      <cl-button iconPosition="left" icon = "refresh" :loading="flag1">{{msg}}</cl-button>
      <cl-button :loading="loading" @click="flag">{{msg}}</cl-button>
      <cl-button-group>
        <cl-button icon="arrow-left">上一页</cl-button>
        <cl-button icon="arrow-right" iconPosition="right">下一页</cl-button>
      </cl-button-group>
      <cl-back-top :bottom="100" :right="50"></cl-back-top>
      <cl-input v-model="inputValue" type="text" clearable></cl-input>
      <cl-collapse>
        <cl-collapse-item name="1"></cl-collapse-item>
        <cl-collapse-item name="2"> </cl-collapse-item>
        <cl-collapse-item name="3" title="45646"></cl-collapse-item>
      </cl-collapse>
    </div>
  </div>
</template>
<script>
import Button from "@/components/button/button";
import ButtonGroup from "@/components/button-group/button-group";
import BackTop from "@/components/backtop/backtop";
import Input from "@/components/input/input";
import Collapse from "@/components/collapse/collapse.vue";
import CollapseItem from "@/components/collapse/collapse-item.vue";
import axios from "axios";

export default {
  components: {
    "cl-button": Button,
    "cl-button-group": ButtonGroup,
    "cl-back-top": BackTop,
    "cl-input": Input,
    "cl-collapse": Collapse,
    "cl-collapse-item": CollapseItem
  },
  data() {
    return {
      msg: "确定",
      loading: false,
      flag1: true,
      flag2: true,
      errorMsg: "用户名错误",
      inputValue: ""
    };
  },
  created() {
  },
  methods: {
    flag() {
      this.loading = !this.loading;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>