<template>
  <transition name="slide">
    <div class="cl-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "cl-carousel-item",
  props: {
    name: {
      type: [Number,String],
      default: 0
    },
  },
  inject: ["rootCarousel"],
  computed: {
    visible() {
      return this.rootCarousel.selectedIndex === this.name;
    },
    reverse() {
      return this.rootCarousel.reverse;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all .6s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style> 