<template>
    <div class="cl-breadcrumb" role="navigation">
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
