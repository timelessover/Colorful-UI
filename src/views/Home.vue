<template>
  <div id="home">
    <div class="button-demo">
      <cl-button iconPosition="left"  icon="settings" :loading="loading" @click="flag">{{msg}}</cl-button>
      <cl-button icon="settings" :disabled="true">{{msg}}</cl-button>
      <cl-button-group>
        <cl-button icon="arrow-left">上一页</cl-button>
        <cl-button icon="arrow-right" iconPosition="right">下一页</cl-button>
      </cl-button-group>
      <cl-back-top :bottom="100" :right="50"></cl-back-top>
      <cl-input v-model="inputValue" type="text" clearable></cl-input>
    </div>
  </div>
</template>
<script>
import Button from "@/components/button/button";
import ButtonGroup from "../components/button-group/button-group";
import BackTop from "../components/backtop/backtop";
import Input from "../components/input/input";

export default {
  components: {
    "cl-button": Button,
    "cl-button-group": ButtonGroup,
    "cl-back-top": BackTop,
    "cl-input": Input
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
  methods: {
    flag() {
      this.loading = !this.loading;
    }
  }
};
</script>
<style lang="scss" scoped>
  
</style>