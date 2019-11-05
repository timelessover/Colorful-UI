<template>
  <div id="home">
    <cl-row :gutter="20">
      <cl-col :span="6">
        <div class="grid-content bg-purple"></div>
      </cl-col>
      <cl-col :span="6">
        <div class="grid-content bg-purple"></div>
      </cl-col>
      <cl-col :span="6">
        <div class="grid-content bg-purple"></div>
      </cl-col>
      <cl-col :span="6">
        <div class="grid-content bg-purple"></div>
      </cl-col>
    </cl-row>
  </div>
</template>
<script>
import Button from "@/components/button/button";
import ButtonGroup from "@/components/button-group/button-group";
import BackTop from "@/components/backtop/backtop";
import Input from "@/components/input/input";
import Collapse from "@/components/collapse/collapse";
import CollapseItem from "@/components/collapse/collapse-item";
import Tabs from "@/components/tabs/tabs";
import Pane from "@/components/tabs/tab-pane";
import InputNumber from "@/components/input-number/input-number.vue";
import Popover from "@/components/popover/popover.vue";
import DropDownMenu from "@/components/dropdown/dropdown-menu.vue";
import DropDownItem from "@/components/dropdown/dropdown-item.vue";
import DropDown from "@/components/dropdown/dropdown.vue";
import Magnifier from "@/components/magnifier/magnifier.vue";
import Row from "@/components/row/row.vue";
import Col from "@/components/col/col.vue";
import Radio from "@/components/radio/radio.vue";
import Checkbox from "@/components/checkbox/checkbox.vue";
import CheckboxGroup from "@/components/checkbox/checkbox-group.vue";
import Affix from "@/components/affix/affix.vue";
import axios from "axios";

export default {
  components: {
    "cl-button": Button,
    "cl-button-group": ButtonGroup,
    "cl-back-top": BackTop,
    "cl-input": Input,
    "cl-collapse": Collapse,
    "cl-collapse-item": CollapseItem,
    "cl-tabs": Tabs,
    "cl-tab-pane": Pane,
    "cl-input-number": InputNumber,
    "cl-popover": Popover,
    "cl-dropdown-menu": DropDownMenu,
    "cl-dropdown-item": DropDownItem,
    "cl-dropdown": DropDown,
    "cl-magnifier": Magnifier,
    "cl-row": Row,
    "cl-col": Col,
    "cl-radio": Radio,
    "cl-checkbox": Checkbox,
    "cl-checkbox-group": CheckboxGroup,
    "cl-affix": Affix
  },
  data() {
    return {
      flag: true,
      activeNames: ["1"]
    };
  },
  created() {},
  watch: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab);
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-dropdown-link {
  height: 50px;
  width: 100px;
  background: blue;
}
#home {
  height: 200vh;
}
.cl-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.cl-col {
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