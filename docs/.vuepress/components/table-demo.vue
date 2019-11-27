<template>
    <div class="demo">
        <p>表示两种相互对立的状态间的切换，多用于触发「开/关」</p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-table :data="tableData" style="width: 100%">
                    <cl-table-column prop="date" label="日期" width="180"></cl-table-column>
                    <cl-table-column prop="name" label="姓名" width="180"></cl-table-column>
                    <cl-table-column prop="address" label="地址"></cl-table-column>
                </cl-table>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{baseMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(0)" ref="xxx">
                <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrow-down' : 'arrow-up'"></cl-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
        <Attributes></Attributes>
    </div>
</template>

<script>
import ClIcon from "@/icon/icon";
import mixin from "../mixin";
import ClTable from "@/table/table";
import ClTableColumn from "@/table/table-column";
import Attributes from "./table-attributes.vue";
export default {
  name: "tabs-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClTable,
    ClTableColumn,
    Attributes
  },
  data() {
    return {
      value: true,
      value1: true,
      value2: true,
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      codeStr: `<cl-table :data="tableData" style="width: 100%">
    <cl-table-column prop="date" label="日期" width="180"></cl-table-column>
    <cl-table-column prop="name" label="姓名" width="180"></cl-table-column>
    <cl-table-column prop="address" label="地址"></cl-table-column>
</cl-table>

  data() {
    return {
    tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
    }
  }
        `
    };
  },
  computed: {
    baseMethods() {
        return this.codeStr.replace(/^ {20}/gm, "").trim();
    }
  }
};
</script>
