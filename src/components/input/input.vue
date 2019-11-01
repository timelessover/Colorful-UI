<template>
  <div :class="classObject">
  
      <input
      class="cl-input__inner"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :disabled="inputDisabled"
      :readonly="readonly"
      @input="updateValue($event.target.value)"
      autocomplete="off"
      @blur="hideSuffix"
      @focus="showSuffix"
    >
    
    <!-- 后置内容 -->
    <span class="cl-input__suffix" v-if="isShow" @mouseover="enterSuffix" @mouseout="leaveSuffix">
      <span class="cl-input__suffix-inner">
        <i
          v-if="showClear"
          class="cl-input-icon cl-icon--circle-close cl-input__clear"
          @click="clear"
        ></i>
        <i v-if="showPwdVisible"
            class="el-input__icon el-icon-view el-input__clear"
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
    readonly: Boolean,
    inputValue: { type: Number },
    showPassword:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      isEnterSuffix:false,
      passwordVisible:false
    };
  },
  computed: {
    classObject() {
      return ["cl-input", { "is-disabled": this.disabled }];
    },
    inputDisabled() {
      return this.disabled;
    },
    showClear() {
      return this.clearable && this.value;
    },
    valueEmpty() {
      return /^\s*$/.test(this.value);
    }
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
      this.isEnterSuffix = false
    },
    handlePasswordVisible(){
      this.passwordVisible = !this.passwordVisible;
      // this.focus();
    },
    enterSuffix(){
      this.isEnterSuffix = true
    },
    leaveSuffix(){
      this.isEnterSuffix = false
    },
    showSuffix(e) {
        this.isShow = this.showClear || true;
    },
    hideSuffix(e) {
      if(!this.isEnterSuffix){
        this.isShow = false;
      }
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
  > .cl-input__suffix {
    position: absolute;
    right: 8px;
    top: 10px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    pointer-events: none;
    > .cl-input__suffix-inner {
      pointer-events: all;
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

