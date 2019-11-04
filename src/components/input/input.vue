<template>
  <div :class="classObject" @mouseenter="isShow = true" @mouseleave="isShow = false">
    <input
      class="cl-input__inner"
      :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
      :placeholder="placeholder"
      :value="value"
      :disabled="inputDisabled"
      :readonly="readonly"
      @input="updateValue($event.target.value)"
      autocomplete="off"
      @blur="handleBlur"
      @focus="handleFocus"
    >
    <!-- 前置内容 -->
    <span class="cl-input__prefix" v-if="$slots.prefix || prefixIcon">
      <slot name="prefix"></slot>
      <i class="cl-input__icon" v-if="prefixIcon" :class="prefixIcon"></i>
    </span>
    <!-- 后置内容 -->
    <span
      class="cl-input__suffix"
      v-if="getSuffixVisible"
      @mouseover="enterSuffix"
      @mouseout="leaveSuffix"
    >
      <span class="cl-input__suffix-inner">
        <template v-if="!showClear || !showPwdVisible">
          <slot name="suffix"></slot>
          <i class="cl-input__icon" v-if="suffixIcon" :class="suffixIcon"></i>
        </template>
        <i
          v-if="showClear"
          class="cl-input-icon cl-icon--circle-close cl-input__clear"
          @click="clear"
        ></i>
        <i
          v-if="showPwdVisible"
          class="cl-input__icon cl-icon--view cl-input__clear"
          @click="handlePasswordVisible"
        ></i>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  name: "cl-input",
  props: {
    value: { type: [String, Number], default: "" },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    icon: { type: String },
    iconLeft: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    size: { type: String },
    transparent: { type: Boolean, default: false },
    label: { type: String },
    labelLeft: { type: String },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    inputValue: { type: Number },
    showPassword: {
      type: Boolean,
      default: false
    },
    suffixIcon: String,
    prefixIcon: String
  },
  data() {
    return {
      isShow: false,
      focused: false,
      isEnterSuffix: false,
      passwordVisible: false
    };
  },
  computed: {
    classObject() {
      return [
        "cl-input",
        { "is-disabled": this.disabled },
        {
          "cl-input--suffix":
            this.suffixIcon || this.clearable || this.showPassword
        },
        { "cl-input--prefix": this.prefixIcon }
      ];
    },
    inputDisabled() {
      return this.disabled;
    },
    showClear() {
      return (
        this.clearable &&
        this.value &&
        !this.readonly &&
        (this.focused || this.isShow)
      );
    },
    valueEmpty() {
      return /^\s*$/.test(this.value);
    },
    getSuffixVisible() {
      return this.suffixIcon || this.showClear || this.showPassword;
    },
    showPwdVisible() {
      return this.showPassword && this.value;
    },
  },
  methods: {
    updateValue(v) {
      this.changeHandler(v);
      this.$emit("change", v);
    },
    clearHandler() {
      this.changeHandler("");
    },
    changeHandler(v) {
      this.$emit("input", v);
    },
    clear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
    },
    enterSuffix() {
      this.isEnterSuffix = true;
    },
    leaveSuffix() {
      this.isEnterSuffix = false;
    },
    handleBlur(e) {
      this.focused = false;
      this.$emit("blur", e);
    },
    handleFocus(e) {
      this.focused = true;
      this.$emit("focus", e);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common/base.scss";

.cl-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  &.cl-input--suffix {
    .cl-input__inner {
      padding-right: 30px;
    }
  }
  &.cl-input--prefix {
    .cl-input__inner {
      padding-left: 30px;
    }
  }
  > .cl-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &::-webkit-input-placeholder {
      color: #e4e7ed;
    }
  }
  &.is-disabled {
    .cl-input__inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
      &::-webkit-input-placeholder {
        color: #c0c4cc;
      }
    }
  }

  > .cl-input__prefix {
    text-align: center;
    transition: all 0.3s;
    position: absolute;
    left: 5px;
    top: 12px;
    color: #c0c4cc;
  }
  > .cl-input__suffix {
    position: absolute;
    right: 5px;
    top: 10px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    pointer-events: none;
    > .cl-input__suffix-inner {
      pointer-events: all;
      // padding-right: 30px;
      .cl-input__icon {
        line-height: 20px;
      }
      .cl-input__clear {
        color: rgb(230, 230, 219);
        font-size: 16px;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: rgb(194, 194, 185);
        }
      }
    }
  }
}
</style>

