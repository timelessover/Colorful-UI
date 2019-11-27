<template>
    <div class="cl-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'cl-radio-group',
  componentName: 'ClRadioGroup',
  props: {
    value: {},
  },
  provide(){
      return {
          radioGroup:this
      }
  }
};
</script>

<style lang="scss" scoped>
</style>