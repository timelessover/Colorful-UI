<template>
    <span class="cl-breadcrumb__item">
        <span :class="['cl-breadcrumb__inner', to ? 'is-link' : '']" ref="link" role="link">
            <slot></slot>
        </span>
        <i v-if="separatorClass" class="cl-breadcrumb__separator" :class="separatorClass"></i>
        <span v-else class="cl-breadcrumb__separator" role="presentation">{{separator}}</span>
    </span>
</template>
<script>
export default {
  name: "cl-breadcrumb-item",
  props: {
    to: {},
    replace: Boolean
  },
  data() {
    return {
      separator: "",
      separatorClass: ""
    };
  },

  inject: ["Breadcrumb"],

  mounted() {
    this.separator = this.Breadcrumb.separator;
    this.separatorClass = this.Breadcrumb.separatorClass;
    const link = this.$refs.link;
    link.setAttribute("role", "link");
    link.addEventListener("click", _ => {
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);
    });
  }
};
</script>
