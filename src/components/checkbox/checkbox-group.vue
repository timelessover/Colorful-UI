<template>
    <div class="cl-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "cl-checkbox-group",
  props: {
    value: {
      value: {},
    },
    disabled: Boolean,
  },
};
</script>

<style lang="scss" scoped>
</style>