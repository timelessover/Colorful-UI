 return h(this.tag, {
      class: [
        'el-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'el-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
//1. 
<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>

const COMPONENT_NAME = 'cl-row'
export default {
  name: COMPONENT_NAME,
  props: {
    gutter: { type: [String, Number], default: 0 },
    align: { type: [String, Number], default: "top" },
    justify: { type: [String, Number], default: "start" },
    type: String,
  },
  computed: {
      classObject() {
          return [
              'cl-row',
              this.justify !== 'start' ? `is-justify-${this.justify}` : '',
              this.align !== 'top' ? `is-align-${this.align}` : '',
              { 'cl-row--flex': this.type === 'flex' }
          ] 
      }
  },
  computed: {
    style() {
      const ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>