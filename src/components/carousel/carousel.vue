<template>
  <div class="cl-slides" @mouseenter.stop="onMouseEnter" @mouseleave.stop="onMouseLeave">
    <div class="cl-slides-window" ref="window">
      <div class="cl-slides-wrapper" :style="{height}">
        <slot></slot>
      </div>
    </div>
    <div class="cl-slides-dots">
      <!-- 上一张 -->
      <span @click="onClickPrev">
        <icon name="arrow-left"></icon>
      </span>
      <!-- 下方圆点显示 -->
      <span
        v-for="n in itemsLength"
        :class="{active: selectedIndex === n-1}"
        @click="select(n-1)"
        :key="n"
        :data-index="n-1"
      >{{n}}</span>
      <!-- 下一张 -->
      <span @click="onClickNext">
        <icon name="arrow-right"></icon>
      </span>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/icon";

export default {
  components: {
    Icon
  },
  props: {
    height: [String, Number],
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      activeIndex: -1,
      containerWidth: 0,
      itemsLength: 0,
      reverse: false
    };
  },
  computed: {
    selectedIndex() {
      let index = this.activeIndex;
      return index === -1 ? 0 : index;
    },

    items() {
      return this.$children.filter(
        vm => vm.$options.name === "cl-carousel-item"
      );
    }
  },
  mounted() {
    this.getItemsLength();
  },
  provide() {
    return {
      rootCarousel: this
    };
  },
  methods: {
    getItemsLength() {
      this.itemsLength = this.items.length;
    },
    onMouseEnter() {},
    onMouseLeave() {},
    onClickPrev() {
      this.reverse = true;
      this.$nextTick(() => {
        let { activeIndex, itemsLength, selectedIndex } = this;
        if (activeIndex < 0) {
          this.activeIndex = selectedIndex;
        }
        if (activeIndex <= 0) {
          this.activeIndex = itemsLength;
        }
        this.activeIndex--;
      });
    },
    onClickNext() {
      this.reverse = false;
      this.$nextTick(() => {
        let { activeIndex, itemsLength, selectedIndex } = this;
        if (activeIndex < 0) {
          this.activeIndex = selectedIndex;
        }
        this.activeIndex++;
        if (this.activeIndex >= itemsLength) {
          this.activeIndex = 0;
        }
      });
    },
    select(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: red;
        background: black;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>