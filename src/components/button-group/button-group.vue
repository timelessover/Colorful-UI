<template>
  <div class="cl-btn-group">
    <slot></slot>
  </div>
</template>
<script>
const COMPONENT_NAME = "cl-button-group";
export default {
  name: COMPONENT_NAME,
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`cl-button-group 的子元素应该全是 cl-button组件`);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common/base.scss";
.cl-btn-group {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  >.cl-btn {
        border-radius: 0;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            margin-right: 2px;
        }
        &:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
}

</style>