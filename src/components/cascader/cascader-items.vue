<template>
  <div class="cl-cascader-items">
    <div class="left">
      <div
        class="label"
        :class="{active:selected.indexOf(item.label)>-1}"
        v-for="(item, index) in items"
        :key="index"
        @click="onClickLabel(item)"
      >
        <span class="name">{{item.label}}</span>
        <span class="icons">
          <template>
            <icon class="next" name="arrow-right" v-if="rightArrowVisible(item)"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cl-cascader-items
        :items="rightItems"
        @update:selected="onUpdateSelected"
        :level="level + 1"
        :selected="selected"
        
      ></cl-cascader-items>
    </div>
  </div>
</template>
<script>
import Icon from "../icon/icon";
// v-if="selected[level] === rightItems"
export default {
  name: "cl-cascader-items",
  components: {
    Icon
  },
  props: {
    items: {
      type: Array
    },
    selected: { type: Array, default: () => [] },
    level: {
      type: Number,
      default: 0
    }
  },
  inject: ["root"],
  data() {
    return {
      rightItems: null,
      label:{}
    };
  },
  watch: {
    selected(val){
      if(!val[this.level]){
        this.rightItems = null
      }
    }
  },

  methods: {
    rightArrowVisible(item) {
      return item.children;
    },
    onClickLabel(item) {
      this.rightItems = item.children
      let copy = JSON.parse(JSON.stringify(item));
      this.$emit("update:selected", { label: item.label, level: this.level });
      if (!this.items[0].children) {
        this.root.close();
      }
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common/base.scss";
.cl-cascader-items {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 300px;
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid #ddd;
    overflow: auto;
  }
  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      background: $grey;
    }
    &.active {
      color: $brand;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.8);
      }
    }
  }
}
</style>
