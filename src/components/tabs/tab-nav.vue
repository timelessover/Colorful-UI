<template>
  <div class="cl-tabs-nav">
    <div
      :class="['cl-tabs-nav--item',{'isActive':isActive == item.name}]"
      v-for="(item,index) in tabList"
      :key="index"
      @click="handleClick(item)"
    >
      <div class="cl-tabs-nav--item--inner">{{item.label}}</div>
    </div>
    <TabBar :currentTab="currentTab"></TabBar>
  </div>
</template>

<script>
import TabBar from "./tab-bar";
export default {
  name: "cl-tab-nav",
  components: {
    TabBar
  },
  data() {
    return {
      currentTab: this.$parent.value,
      tabList: []
    };
  },
  computed: {
    isActive() {
      return this.$parent.value;
    }
  },
  created() {
    this.getTabList();
  },
  methods: {
    handleClick(item) {
      this.currentTab = item;
      this.$parent.$emit("tab-click", JSON.parse(JSON.stringify(item)));
    },
    getTabList() {
      let slotsArr =  this.$parent.$slots.default;
      let item = slotsArr.filter(item => {
        return item.componentOptions
      })

      let list = item.map(item => {
        return item.data.attrs;
      });
      let tabName = item.map(item => {
        return item.componentOptions.propsData;
      });
      let arr = [];
      for (let i = 0; i < tabName.length; i++) {
        let obj = {};
        obj.name = tabName[i].name;
        obj.label = list[i].label;
        obj.index = i;
        arr.push(obj);
      }
      this.tabList = arr;
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/variable.scss";
.cl-tabs-nav {
  font-size: 14px;
  display: flex;
  min-width: 300px;
  position: relative;
  margin: 0 0 15px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
  }
  .cl-tabs-nav--item {
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    &:first-child {
      padding: 10px 15px 15px 0;
    }
    &:last-child {
       padding: 10px 15px 15px 0;
    }
    &.isActive {
      color: #409eff;
    }
    &:hover {
      color: #409eff;
    }
  }
}
</style>