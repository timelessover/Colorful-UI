<template>
    <div class="cl-breadcrumb" aria-label="Breadcrumb" role="navigation">
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
    if (items.length) {
      items[items.length - 1].setAttribute("aria-current", "page");
    }
  }
};
</script>
