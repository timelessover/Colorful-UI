//1. 可选择触发滚动的对象
//2. 可设置滚动高度达到某数值才出现
//3. 可控制其位置，left和right
//<cl-backtop target="..." :bottom="100"></cl-backtop>
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

const COMPONENT_NAME = 'cl-back-top'
export default {
  name: COMPONENT_NAME,
   components: {
    "cl-icon": Icon
  },
  props: {
    visibilityHeight: {
      type: Number,
      default: 300
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
      return `${this.bottom}px`
    },
    styleRight() {
      return `${this.right}px`
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
      this.$emit('click', e);
    },
    scrollToTop() {
      let el = this.el;
      let step = 0;
      let interval = setInterval(() => {
        if (el.scrollTop <= 0) {
          clearInterval(interval);
          return;
        }
        step += 10;
        el.scrollTop -= step;
      }, 20);
    }
  },
  mounted() {
    this.init();
    this.throttledScrollHandler = this._.throttle(this.onScroll,300);
    this.container.addEventListener('scroll', this.throttledScrollHandler);
  },
  beforeDestroy () {
    this.container.removeEventListener('scroll');
  },
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

