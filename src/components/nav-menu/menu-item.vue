<template>
    <div class="cl-menu-item" :class="{active}" @click="onClick">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "cl-menu-item",
  inject: ["eventBus"],
  props: {
    index: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return { active: false, pathArr: null };
  },
  computed: {
    path() {
      return this.pathArr && this.pathArr.join("/");
    }
  },
  mounted() {
    this.eventBus.$on("click-item", this.listenItem);
    this.eventBus.$on("vertical-prop", this.listenVertical);
    this.eventBus.$on("update-menu", this.listenRefresh);
    this.$nextTick(() => {
      this.getNames(this);
    });
  },
  methods: {
    //构建对应path
    getNames(vm) {
      this.pathArr = this.pathArr || [];
      vm.$options.name === "ClMenuItem" || vm.$options.name === "ClSubMenu"
        ? this.pathArr.unshift(vm.name)
        : "";
      if (vm.$parent) {
        this.getNames.call(this, vm.$parent);
      }
    },
    onClick() {
      this.active = true;
      this.heightLightSubMenu()
      this.eventBus.$emit("click-item", {
        index: this.index,
        name: this.name,
        path: this.path
      });
    },
    listenItem(data) {
      this.active = this.index === data.index;
    },
    heightLightSubMenu() {
      if (this.$parent.$parent.$options.name === "cl-subMenu") {
        // subMenu情况
        let parentIndex = this.$parent.$parent.index;
        const childrenArr = this.$parent.$parent.$parent.$children;
        childrenArr.forEach(child => {
          child.active = false;
        });
        this.$parent.$parent.active =
          this.index.split("-")[0] === parentIndex ? true : false;
      } else {
        // menuitem单独处理
        const childrenArr = this.$parent.$children;
        childrenArr.forEach(child => {
          child.active = false;
        });
      }
    },
    listenVertical(value) {
      this.vertical = value;
    },
    listenRefresh(data) {
      //监听到index检查自身active
      if (data.index) {
        this.active = this.index === data.index;
        //监听到path，如果是自己则抛出index
      } else if (data.path === this.path) {
        this.eventBus.$emit("update-menu", { index: this.index });
      }
    }
  },
  beforeDestroy() {
    this.eventBus.$off("click-item", this.listenItem);
    this.eventBus.$off("vertical-prop", this.listenVertical);
    this.eventBus.$off("update-menu", this.listenRefresh);
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/index.scss";
.cl-menu-item {
  padding: 5px 15px;
  white-space: nowrap;
  min-width: 8em;
  font-size: 14px;
  color: $main;
  box-sizing: border-box;
  &:hover {
    background: $brand;
    color: #fff;
  }
  &.active {
    overflow: hidden;
    color: $brand;
    &:hover {
      background: $brand;
      color: #fff;
    }
  }
}
.cl-sub-menu .cl-menu-item {
  &:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
  &:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
}
.cl-sub-menu.vertical .cl-menu-item {
  &:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &:last-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  padding-left: 25px;
}
.cl-sub-menu.vertical .cl-sub-menu.vertical .cl-menu-item {
  padding-left: 35px;
//   &.active {
//     color: #fff;
//   }
}
</style>