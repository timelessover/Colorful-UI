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
    link.addEventListener("click", _ => {
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common/base.scss";
.cl-breadcrumb__item {
  .cl-breadcrumb__inner {
    &.is-link,
    > a {
      font-weight: 700;
      text-decoration: none;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      color: #303133;
      &:hover{
        color:$brand
      }
    }
  }
  .cl-breadcrumb__separator {
    margin: 0 9px;
    font-weight: 700;
    color: #c0c4cc;
  }
}
</style>

