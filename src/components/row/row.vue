<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "cl-row",
  props: {
    gutter: { type: [String, Number], default: 0 },
    align: { type: [String, Number], default: "top" },
    justify: { type: [String, Number], default: "start" }
  },
  computed: {
      classObject() {
          return [
              'cl-row',
              align,
              justify
          ] 
      }
  },
  mounted() {
    this.$children.forEach((col, index) => {
      if (this.gutter > 0) {
        if (index < this.$children.length - 1)
          col.$el.style.paddingRight = this.gutter + "em";
        col.$el.style.paddingBottom = this.gutter + "em";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>