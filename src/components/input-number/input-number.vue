<template>
  <div class="cl-input-number">
    <span class="cl-input-number__decrease" role="button" @click="decrease">
      <i class="cl-icon--minus"></i>
    </span>
    <span class="cl-input-number__increase" role="button" @click="increase">
      <i class="cl-icon--plus"></i>
    </span>
    <cl-input
      ref="input"
      :value="currentValue"
      :max="max"
      :min="min"
      @change="handleInputChange"
      @blur="handlerBlur"
    ></cl-input>
  </div>
</template>

<script>
import ClInput from "../input/input.vue";

export default {
  name: "cl-input-number",
  components: {
    ClInput
  },
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {},
  },
  data() {
    return {
      currentValue: 0
    };
  },
  watch: {
    currentValue: {
      immediate: true,
      handler(value) {
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) {
            newVal = 0;
          }
        }
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.$emit("change", newVal);
      }
    }
  },
  methods: {
    increase() {
      if (this.max) {
        this.currentValue < this.max
          ? this.currentValue++
          : (this.currentValue = this.max);
      }
    },
    handlerBlur(e) {
      let value = e.target.value;
      let newVal = value === undefined ? value : Number(value);
      if (newVal !== undefined) {
        if (isNaN(newVal)) {
          newVal = 0;
        }
      }
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      e.target.value = newVal;
      this.currentValue = newVal;
    },
    handleInputChange(value) {
      let newVal = value === undefined ? value : Number(value);
      if (newVal !== undefined) {
        if (isNaN(newVal)) {
          newVal = 0;
        }
      }
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      this.currentValue = newVal;
    },
    decrease() {
      if (this.min) {
        this.currentValue > this.min
          ? this.currentValue--
          : (this.currentValue = this.min);
      }
    }
  }
};
</script>

<style lang="scss" >
@import "../../styles/variable.scss";

.cl-input-number {
  position: relative;
  display: inline-block;
  width: 180px;
  line-height: 38px;
  .cl-input__inner {
    -webkit-appearance: none;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
  }
  .cl-input-number__decrease,
  .cl-input-number__increase {
    position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      color: #409eff;
    }
  }
  .cl-input-number__decrease {
    left: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid #dcdfe6;
  }
  .cl-input-number__increase {
    right: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid #dcdfe6;
  }
}
</style>