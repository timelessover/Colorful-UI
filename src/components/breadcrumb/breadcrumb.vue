<template>
  <div class="cl-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "cl-breadcrumb",

  props: {
    separator: {
      type: String,
      default: "/"
    },
    separatorClass: {
      type: String,
      default: ""
    }
  },

  provide() {
    return {
      Breadcrumb: this
    };
  },

  mounted() {
    const items = this.$el.querySelectorAll(".cl-breadcrumb__item");
  }
};
</script>
<style lang="scss" scoped>
.cl-breadcumb {
  font-size: 14px;
  line-height: 1;
  display: flex;
  &::before {
    content: "";
    display: table;
  }
  &::after {
    content: "";
    display: table;
  }
}
</style>

