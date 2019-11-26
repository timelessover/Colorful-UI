<template>
  <transition name="cl-fade-in">
    <div
      v-if="visible"
      @click.stop="handleClick($event)"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      class="cl-back-top"
    >
      <slot>
        <cl-icon name="caret-top"></cl-icon>
      </slot>
    </div>
  </transition>
</template>
<script>
import Icon from "../icon/icon";
import {throttle} from "lodash"

export default {
  name: "cl-back-top",
  components: {
    "cl-icon": Icon
  },
  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: [String],
    right: {
      type: Number,
      default: 30
    },
    bottom: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      el: null,
      container: null,
      visible: false
    };
  },
  computed: {
    styleBottom() {
      return `${this.bottom}px`;
    },
    styleRight() {
      return `${this.right}px`;
    }
  },
  methods: {
    init() {
      this.container = document;
      this.el = document.documentElement;
      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },
    onScroll() {
      const scrollTop = this.el.scrollTop;
      this.visible = scrollTop >= this.visibilityHeight;
    },
    handleClick(e) {
      this.scrollToTop();
      this.$emit("click", e);
    },
    scrollToTop() {
      let timer;
      let el = this.el;
      let distance = 0;
      !function step() {
        distance += 10;
        el.scrollTop -= distance;
        if (el.scrollTop > 0) {
          timer = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(timer);
        }
      }()
    }
  },
  mounted() {
    this.init();
    this.throttledScrollHandler = throttle(this.onScroll, 300);
    this.container.addEventListener("scroll", this.throttledScrollHandler);
  },
  beforeDestroy() {
    this.container.removeEventListener("scroll");
  }
};
</script>
<style lang="scss" scoped>
.cl-fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.cl-fade-enter,
.fade-leave-to {
  opacity: 0;
}
.cl-back-top {
  bottom: 50px;
  right: 50px;
  position: fixed;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
  &:hover {
    background-color: #f2f6fc;
  }
}
</style>

