<template>
    <div class="cl-switch">
        <span v-if="falseText" class="switch-left-text">{{falseText}}</span>
        <span
            ref="core"
            class="cl-switch-core"
            :value="value"
            :class="{active:value,['disabled']:disabled}"
            @click="toggle"
            :style="styleObject"
        >
            <span class="cl-switch-core-inner" :style="innerStyle"></span>
        </span>
        <span v-if="trueText" class="switch-right-text">{{trueText}}</span>
    </div>
</template>
<script>
export default {
  name: "cl-switch",
  props: {
    value: { type: Boolean, default: false },
    width: { type: String, default: "40px" },
    falseText: { type: String, default: "" },
    trueText: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    falseColor: { type: String, default: "#bbb" },
    trueColor: { type: String, default: "#409EFF" }
  },
  computed: {
    styleObject() {
      return `width:${this.width};height:${parseInt(this.width) /
        2}px;border-radius:${parseInt(this.width) / 4}px`;
    },
    innerStyle() {
      return `width:${parseInt(this.width) / 2 - 4}px;height:${parseInt(
        this.width
      ) /
        2 -
        4}px`;
    }
  },
  methods: {
    toggle() {
      if (this.disabled) {
        return;
      }
      let newValue = !this.value;
      this.$emit("input", newValue);
      this.$emit("value-change", newValue);
      if (this.trueColor && newValue) {
        this.$refs.core.style.background = this.trueColor;
      }
      if (this.falseColor && !newValue) {
        this.$refs.core.style.background = this.falseColor;
      }
    }
  },
  mounted() {
    if (this.trueColor && this.value) {
      this.$refs.core.style.background = this.trueColor;
    }
    if (this.falseColor && !this.value) {
      this.$refs.core.style.background = this.falseColor;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/index.scss";
.cl-switch {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  > .switch-left-text {
    margin-right: 3px;
  }
  > .switch-right-text {
    margin-left: 3px;
  }
  > .cl-switch-core {
    display: inline-block;
    background: $error;
    position: relative;
    transition: all 0.3s linear;
    cursor: pointer;
    > .cl-switch-core-inner {
      display: block;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s linear;
      left: 2px;
      margin-left: 0;
    }
    &.active {
      background: $success;
      > .cl-switch-core-inner {
        margin-left: 50%;
      }
    }
    &.disabled {
      background: #bbb;
    }
  }
}
</style>