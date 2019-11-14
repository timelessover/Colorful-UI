<template>
    <label class="cl-checkbox" :class="{'is-checked':innerValue,'is-disabled':isDisabled}">
        <span
            class="cl-checkbox__input"
            :class="{'is-checked':innerValue,'is-disabled':isDisabled,'is-focus':isFocus}"
        >
            <span class="cl-checkbox__inner" @mouseenter="isFocus=true" @mouseleave="isFocus=false"></span>
            <input
                class="cl-checkbox__original"
                type="checkbox"
                :name="name"
                :disabled="isDisabled"
                v-model="innerValue"
                @change="handleChange"
            >
        </span>
        <span class="cl-checkbox__label" v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
export default {
  props: {
    value: {},
    label: {},
    name: String,
    disabled: Boolean,
    checked: Boolean
  },
  data() {
    return {
      innerValue: false,
      isFocus: false
    };
  },
  watch: {
    innerValue(val) {
      if (this.$parent.$options._componentTag == "cl-checkbox-group") {
        if (val) {
          this.$parent.getLabel(this.label);
        } else {
          this.$parent.removeLabel(this.label);
        }
      }
    }
  },
  computed: {
    isDisabled() {
      return this.disabled;
    }
  },
  mounted() {
    this.innerValue = this.value;
  },
  methods: {
    handleChange() {
      this.$emit("input", this.innerValue);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/index.scss";
.cl-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  &.is-checked {
    color: $brand;
  }
  .cl-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    &.is-focus {
      .cl-checkbox__inner {
        border: 1px solid $brand;
      }
    }
    &.is-disabled {
      .cl-checkbox__inner {
        background-color: #edf2fc;
        border-color: #dcdfe6;
        cursor: not-allowed;
        &::after {
          cursor: not-allowed;
          border-color: #c0c4cc;
        }
      }
      & + span.cl-checkbox__label {
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
    &.is-checked {
      .cl-checkbox__inner {
        background-color: $brand;
        border-color: $brand;
        &::after {
          transform: rotate(45deg) scaleY(1);
        }
      }
      &.is-disabled {
        .cl-checkbox__inner {
          background-color: #edf2fc;
          border-color: #dcdfe6;
          cursor: not-allowed;
          &::after {
            cursor: not-allowed;
            border-color: #c0c4cc;
          }
        }
        & + span.cl-checkbox__label {
          color: #c0c4cc;
          cursor: not-allowed;
        }
      }
    }
    .cl-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &::after {
        box-sizing: content-box;
        content: "";
        border: 2px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 3px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .cl-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .cl-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
</style>