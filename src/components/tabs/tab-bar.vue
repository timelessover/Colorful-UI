<template>
  <div class="cl-tabs__active-bar" :style="barStyle"></div>
</template>
<script>
export default {
  name: "TabBar",

  props: {
    currentTab: {}
  },

  inject: ["rootTabs"],
  mounted() {
    this.getOffset();
  },

  data() {
    return {
      width: "",
      offset: ""
    };
  },
  watch: {
    immediate: true,
    currentTab(val) {
      this.getOffset()
    }
  },
  computed: {
    barStyle() {
      return [{ width: `${this.width}px`},{transform:`translate(${this.offset}px)`}];
    }
  },
  methods: {
    getOffset() {
      let current;
      let DomList = this.rootTabs.$children[0].$el.children;
      for (let i = 0; i < DomList.length - 1; i++) {
        for (let j = 0; j < DomList[i].classList.length; j++) {
          if (DomList[i].classList[j] === "isActive") {
            current = DomList[i];
          }
        }
      }
      let first = this.rootTabs.$children[0].$el.children[0];
      this.width = current.getBoundingClientRect().width ;
      this.offset =
        current.getBoundingClientRect().left -
        first.getBoundingClientRect().left ;
    }
  }
};
</script>
<style lang="scss">
.cl-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #409eff;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  list-style: none;
}
</style>

