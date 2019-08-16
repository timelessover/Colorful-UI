<template>
    <div class="cl-dropdown-menu" v-show="isVisable">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name:'cl-dropdown-menu',
  inject: ["dropdown"],
  created() {
  },
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
</style>