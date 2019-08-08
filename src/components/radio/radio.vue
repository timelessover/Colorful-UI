
// export default {
//   data() {
//     return {
//       radio: "1"
//     };
//   }
// };
// </script>
//  **/
<template>
  <label :tabindex="tabIndex">
    <span class="cl-radio__input">
      <span class="cl-radio__inner"></span>
      <input
        ref="radio"
        class="cl-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        @input="updateValue($event.target.value)"
        tabindex="-1"
      >
    </span>
    <span class="cl-radio__label" @keydown.stop>
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  componentName: "ElRadio",
  props: {
    value: {},
    label: {
      type: [String, Number]
    }
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
        console.log('2')
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label);
      }
    },
    tabIndex() {
      return this.model !== this.label ? -1 : 0;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$parent.$children.forEach(child => {
        if (child.label == this.model) {
          child.$refs.radio.checked = true;
        }
      });
    });
  },
  methods: {
    updateValue(v) {
      this.$nextTick(() => {
        this.$parent.$children.forEach(child => {
          child.label == v ? child.$refs.radio.checked = true : child.$refs.radio.checked = false
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>