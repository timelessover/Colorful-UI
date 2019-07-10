<template>
  <div>
    <div :class="classObject" :style="styleObject">
      <slot></slot>
    </div>
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
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    styleObject() {
      let style = {};

      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + "px";
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classObject() {
      let classList = [];

      ["span", "offset", "pull", "push"].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          classList.push(
            prop !== "span"
              ? `cl-col-${prop}-${this[prop]}`
              : `cl-col-${this[prop]}`
          );
        }
      });

      ["xs", "sm", "md", "lg", "xl"].forEach(size => {
        if (typeof this[size] === "number") {
          classList.push(`cl-col-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== "span"
                ? `cl-col-${size}-${prop}-${props[prop]}`
                : `cl-col-${size}-${props[prop]}`
            );
          });
        }
      });
      return ["cl-col", classList];
    },
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== "ClRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>