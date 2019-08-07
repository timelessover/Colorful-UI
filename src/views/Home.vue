<template>
  <div id="home">
    <cl-row :gutter="20">
      <cl-col :span="6"><div style="background:blue;width:100%">1</div> </cl-col>
      <cl-col :span="6"><div style="background:blue;width:100%;">1</div></cl-col>
      <cl-col :span="12"><div style="background:blue;width:100%;">1</div></cl-col>
    </cl-row>
    <div class="button-demo">
      <cl-button iconPosition="left" icon="refresh" :loading="flag1">{{msg}}</cl-button>
      <cl-button :loading="loading" @click="flag">{{msg}}</cl-button>
      <cl-button-group>
        <cl-button icon="arrow-left">上一页</cl-button>
        <cl-button icon="arrow-right" iconPosition="right">下一页</cl-button>
      </cl-button-group>
      <cl-back-top :bottom="100" :right="50"></cl-back-top>
      <cl-input v-model="value" type="text" clearable></cl-input>
      <cl-collapse>
        <cl-collapse-item name="1"></cl-collapse-item>
        <cl-collapse-item name="2"></cl-collapse-item>
        <cl-collapse-item name="3" title="45646"></cl-collapse-item>
      </cl-collapse>
      <cl-tabs @tabs="handleClick">
        <cl-tab-pane label="用户管理" name="0">用户管理</cl-tab-pane>
        <cl-tab-pane label="配置管理" name="1">配置管理</cl-tab-pane>
        <cl-tab-pane label="角色管理" name="2">角色管理</cl-tab-pane>
        <cl-tab-pane label="哈哈哈" name="3">哈哈哈</cl-tab-pane>
      </cl-tabs>
      <cl-input-number v-model="value" @change="handleChange"></cl-input-number>
      <cl-dropdown>
        <span class="cl-dropdown-link">
          下拉菜单
          <i class="cl-icon-arrow-down cl-icon--right"></i>
        </span>
        <cl-dropdown-menu slot="dropdown">
          <cl-dropdown-item>黄金糕</cl-dropdown-item>
          <cl-dropdown-item>狮子头</cl-dropdown-item>
          <cl-dropdown-item>螺蛳粉</cl-dropdown-item>
          <cl-dropdown-item>双皮奶</cl-dropdown-item>
          <cl-dropdown-item>蚵仔煎</cl-dropdown-item>
        </cl-dropdown-menu>
      </cl-dropdown>
      <div>
        <cl-magnifier :imgList="imgList"></cl-magnifier>
      </div>
    </div>
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
    "cl-col": Col
  },
  data() {
    return {
      msg: "确定",
      loading: false,
      flag1: true,
      flag2: true,
      errorMsg: "用户名错误",
      value: 5,
      list: [{ name: "chris", age: 18 }, { name: "james", age: 30 }],
      imgList: [
        {
          path:
            "http://www.17sucai.com/preview/905244/2019-06-20/%E6%B7%98%E5%AE%9D%E4%B8%BB%E5%9B%BE/images/banner1.jpg"
        },
        {
          path:
            "http://www.17sucai.com/preview/905244/2019-06-20/%E6%B7%98%E5%AE%9D%E4%B8%BB%E5%9B%BE/images/banner2.jpg"
        },
        {
          path:
            "http://www.17sucai.com/preview/905244/2019-06-20/%E6%B7%98%E5%AE%9D%E4%B8%BB%E5%9B%BE/images/banner2.jpg"
        },
        {
          path:
            "http://www.17sucai.com/preview/905244/2019-06-20/%E6%B7%98%E5%AE%9D%E4%B8%BB%E5%9B%BE/images/banner2.jpg"
        },
        {
          path:
            "http://www.17sucai.com/preview/905244/2019-06-20/%E6%B7%98%E5%AE%9D%E4%B8%BB%E5%9B%BE/images/banner2.jpg"
        }
      ]
    };
  },
  created() {},
  watch: {},
  methods: {
    flag() {
      this.loading = !this.loading;
    },
    handleClick(tab, event) {
      console.log(tab);
    },
    handleChange(value) {
      console.log(value);
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
</style>