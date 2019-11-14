
<template>
  <label
    :tabindex="tabIndex"
    class="cl-radio"
    :class="{'is-disabled': isDisabled,'is-checked': model == label }"
  >
    <span
      class="cl-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model == label
      }"
    >
      <span class="cl-radio__inner"></span>
      <input
        ref="radio"
        class="cl-radio__original"
        :value="label"
        type="radio"
        @input="updateValue($event.target.value)"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="cl-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  componentName: "cl-radio",
  props: {
    value: {},
    label: {
      type: [String, Number]
    },
    disabled: Boolean
  },
  data() {
    return {
      radioGroup: null
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "ClRadioGroup") {
          parent = parent.$parent;
        } else {
          this.radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
          return this.isGroup ? this.radioGroup.value : this.value;
      },
      set(val) {
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model == this.label);
      }
    },
    tabIndex() {
      return this.model != this.label ? -1 : 0;
    },
    isDisabled() {
      return this.disabled;
    }
  },
  methods: {
    updateValue(v) {
      this.radioGroup
        ? this.radioGroup.$emit("input", v)
        : this.$emit("input", v);
      this.$nextTick(() => {
        this.$parent.$children.forEach(child => {
          child.label == v
            ? (child.$refs.radio.checked = true)
            : (child.$refs.radio.checked = false);
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  &.is-disabled {
    .cl-radio__label {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  &.is-checked + .cl-radio__label {
    color: #409eff;
  }
  .cl-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    &.is-checked {
      .cl-radio__inner {
        border-color: #409eff;
        background: #409eff;
        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    &.is-disabled {
      .cl-radio__inner {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;
        &::after {
          background-color: #c0c4cc;
        }
      }
    }
    .cl-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .cl-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .cl-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>