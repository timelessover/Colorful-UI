// 三个pane 三个tab
// 点击一个tab,一个pane打开，再点击关闭，二三同上

<template >
    <div
        class="cl-collapse-item"
        :class="{'is-active': isActive, 'is-disabled': disabled }"
        @click="handleHeaderClick"
    >
        <slot name="title">{{title}}</slot>
        <i class="cl-collapse-item__arrow cl-icon-arrow-right"></i>
    </div>
</template>
<script>
export default {
  name: "cl-collapse-item",

  inject: ["collapse"],

  data() {
    return {
      contentWrapStyle: {
        height: "auto",
        display: "block"
      },
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
  computed: {
    // isActive() {
    //   return this.collapse.activeNames.indexOf(this.name) > -1;
    // }
  },

  methods: {
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
.is-active {
  background: red;
  height: 50px;
}
</style>
