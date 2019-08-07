<template>
  <div :class="classObject" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
const COMPONENT_NAME = "cl-col";
export default {
  name: COMPONENT_NAME,
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      console.log(parent)
      return parent ? parent.gutter : 0;
    },
    classObject() {
      return ["cl-col", `cl-col-${this.span}`];
    },
    styleObject() {
      let style = {};

      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + "px";
        style.paddingRight = style.paddingLeft;
      }
      return style;
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-col {
  height: 100%;

  display: inline-flex;
}

@for $i from 1 through 24 {
  .cl-col-#{$i} {
    width: 100%/24 * $i;
  }
}
</style>