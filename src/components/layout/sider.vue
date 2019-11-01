
<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <cl-button class="close" @click="visible = false">关闭</cl-button>
    </div>
  </transition>
</template>
<script>
import Button from '../button/button'
export default {
  name: "cl-sider",
  components: {'cl-button':Button},
  data() {
    return {
      visible: true
    }
  }
};
</script>
<style lang="scss" scoped>
.sider {
  position: relative;
  .close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to {
  margin-left: -200px;
}
</style>


