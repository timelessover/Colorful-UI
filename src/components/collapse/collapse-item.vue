<template >
  <div class="cl-collapse-item" :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      class="cl-collapse-item__header"
      @click="handleHeaderClick"
      :class="{
          'is-active': isActive
        }"
    >
      <slot name="title">{{title}}</slot>
      <i class="cl-collapse-item__arrow cl-icon--arrow-right" :class="{'is-active': isActive}"></i>
    </div>
    <div class="cl-collapse-item--pane" ref="pane"  :style="`height:${contentHeight}px`" :class="{'is-active': isActive}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "cl-collapse-item",

  inject: ["collapse"],
  data() {
    return {
      contentHeight: 0,
      isClick: false,
      isActive: false
    };
  },
  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      }
    },
    disabled: Boolean
  },
  watch: {
    isActive: "getCotentHeight"
  },

  methods: {
    getCotentHeight() {
      let pane = this.$refs.pane;
      let paneHeight = pane.scrollHeight;
      this.contentHeight = paneHeight;
      if (!this.isActive) {
        this.contentHeight = 0;
      }
    },
    findItem() {
      this.collapse.$children.forEach(child => {
        child.isActive = false;
      });
    },
    handleHeaderClick(e) {
      if (this.isActive) {
        this.findItem();
      } else {
        this.findItem();
        this.isActive = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-collapse-item {
  font-size: 13px;
  transition: all 0.3s;
  line-height: 20px;
  will-change: height;
  border-top: 1px solid #ebeef5;
  cursor: pointer;
  &:last-child {
    border-bottom: 1px solid #ebeef5;
  }
  .cl-collapse-item__header {
    height: 48px;
    line-height: 48px;
    display: flex;
    justify-content: space-between;
  }

  .cl-collapse-item__arrow {
    transition: all 0.3s;
    height: 48px;
    line-height: 48px;
    &.is-active {
      transform: rotate(90deg);
    }
  }
  .cl-collapse-item--pane {
    overflow: hidden;
    transition: all 0.5s;
    &.is-active{
      padding-bottom: 25px;
    }
  }
}
</style>
