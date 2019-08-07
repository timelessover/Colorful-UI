
<template>
  <div :class="classObject" :style="style">
    <slot></slot>
  </div>
</template>

<script>
const COMPONENT_NAME = "cl-row";
export default {
  name: COMPONENT_NAME,
  props: {
    gutter: { type: [String, Number], default: 0 }
  },
  computed: {
    classObject() {
      return [
        "cl-row"
        // this.justify !== "start" ? `is-justify-${this.justify}` : "",
        // this.align !== "top" ? `is-align-${this.align}` : "",
        // { "cl-row--flex": this.type === "flex" }
      ];
    },
    style() {
      const ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-row {
  position: relative;
  box-sizing: border-box;
  height: 100px;
  width:80vw;
  border: 1px solid red;
  &.demo-layout {
    margin-bottom: 20px;
  }
  &:after {
    display: table;
    content: "";
  }
  &:before {
    display: table;
    content: "";
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>