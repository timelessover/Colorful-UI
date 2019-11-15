<template>
  <transition name="fade">
    <div class="cl-dropdown-menu" v-show="isVisable">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "cl-dropdown-menu",
  inject: ["dropdown"],
  created() {},
  computed: {
    isVisable() {
      return this.dropdown.visable;
    }
  },
  mounted() {
    this.dropdown.initEvent();
  },
  methods: {
    getItems() {}
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>