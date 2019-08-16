<template>
    <div class="cl-dropdown">
        <slot></slot>
        <slot name="dropdown"></slot>
    </div>
</template>

<script>
export default {
  name: "cl-dropdown",
  props: {},
  data() {
    return {
      triggerElm: null,
      visable: false,
      popoverElm: null
    };
  },
  provide() {
    return {
      dropdown: this
    };
  },
  created() {},
  mounted() {},
  methods: {
    initEvent() {
      let show = this.show;
      let hide = this.hide;
      this.triggerElm = this.$slots.default[0].elm;
      this.popoverElm = this.$slots.dropdown[0].elm;
      this.triggerElm.addEventListener("mouseenter", show);
      this.triggerElm.addEventListener("mouseleave", hide);
      this.popoverElm.addEventListener("mouseenter", show);
      this.popoverElm.addEventListener("mouseleave", hide);
    },
    show() {
      this.visable = true;
    },
    hide() {
      this.visable = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>