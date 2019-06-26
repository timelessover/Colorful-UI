<template>
  <div id="home">
    <div class="button-demo">
      <c-button iconPosition="right"  icon="settings" :loading="loading" @click="flag">{{msg}}</c-button>
      <c-button icon="settings">{{msg}}</c-button>
      <c-button-group>
        <c-button icon="settings">上一页</c-button>
        <c-button icon="settings" iconPosition="right">下一页</c-button>
      </c-button-group>
    </div>
  </div>
</template>
<script>
import Button from "../components/button/button";
import ButtonGroup from "../components/button-group/button-group";
export default {
  components: {
    "c-button": Button,
    "c-button-group": ButtonGroup,
  },
  data() {
    return {
      msg: "确定",
      loading: false,
      flag1: true,
      flag2: true,
      errorMsg: "用户名错误",
      inputValue: "你好colorful"
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>