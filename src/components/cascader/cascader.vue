<template>
  <div class="cl-cascader" ref="cascader" v-click-outside="close">
    <cl-input
      v-model="result"
      :placeholder="placeholder"
      readonly
      :clearable="clearable"
      @click.native="popoverVisible = !popoverVisible"
    ></cl-input>
    <div class="cl-popover-wrapper" v-if="popoverVisible">
      <cascader-items
        class="popover"
        :items="options"
        :selected="value"
        @update:selected="onUpdateSelected"
      ></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from "./cascader-items";
import ClickOutside from "../../utils/click-outside";
import { removeListener } from "../../utils/click-outside";
import ClInput from "../input/input";

export default {
  name: "cl-cascade",
  components: { CascaderItems, ClInput },
  directives: {
    ClickOutside
  },
  props: {
    value: { type: Array, default: () => [] },
    options: {
      type: Array
    },
    clearable: { type: Boolean },
    placeholder: { type: [String, Number], default: "请选择" }
  },
  data() {
    return {
      popoverVisible: false,
      level: 0
    };
  },
  provide() {
    return {
      root: this
    };
  },
  computed: {
    result() {
      return this.value.map(item => item).join("/");
    }
  },
  destroyed() {
    removeListener();
  },
  methods: {
    close() {
      this.popoverVisible = false;
    },
    onUpdateSelected(obj) {
      let copy = [...this.value];
      copy[obj.level] = obj.label;
      copy = copy.slice(0, obj.level + 1);
      this.$emit('change',obj.label)
      this.$emit("input", copy);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common/base.scss";
.cl-cascader {
  position: relative;
  .cl-trigger {
    height: 500px;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $brand;
    border-radius: 2px;
  }
  .cl-popover-wrapper {
    position: absolute;
    display: flex;
    top: 100%;
    left: 0;
    margin-top: 8px;
    @extend .box-shadow;
    background: white;
    z-index: 1;
  }
}
</style>
