<template>
  <div id="home">
    <div class="button-demo">
      <c-button icon="settings" :loading="loading" @click="flag">{{msg}}</c-button>
      <c-button icon="settings">{{msg}}</c-button>
      <c-button-group>
        <c-button icon="settings">上一页</c-button>
        <c-button icon="settings">下一页</c-button>
      </c-button-group>
    </div>
    <br>
    <div class="input-demo">
      <c-input v-model="inputValue"></c-input>
      <c-input :disabled="flag1"></c-input>
      <c-input :readonly="flag2" value="我是不可修改的哦"></c-input>
      <c-input :error="errorMsg"></c-input>
      <div>{{inputValue}}</div>
      
    </div>
    <br>
    <div class="c-popover">
      <c-poperver>上面 <div slot="content">上面</div></c-poperver>
      <c-poperver position="left">左面 <div slot="content">左面</div> </c-poperver>
      <c-poperver position="right">右面 <div slot="content">右面</div></c-poperver>
      <c-poperver position="bottom">下面 <div slot="content">下面</div></c-poperver>
    </div>
  </div>
</template>
<script>
import Button from "../components/button/Button";
import ButtonGroup from "../components/button/Button-group";
import Input from "../components/Input";
import Poperver from "../components/Popover";


export default {
  components: {
    "c-button": Button,
    "c-button-group": ButtonGroup,
    "c-input": Input,
    "c-poperver": Poperver
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
      this.loading = true;
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