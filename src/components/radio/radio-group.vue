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
    size: String
  },
  computed: {
    radioGroupSize() {
      return this.size;
    }
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