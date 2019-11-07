<template>
  <div id="home">
    <cl-table
      :data="tableData"
      style="width: 100%">
      <cl-table-column
        prop="date"
        label="日期"
        width="180">
      </cl-table-column>
      <cl-table-column
        prop="name"
        label="姓名"
        width="180">
      </cl-table-column>
      <cl-table-column
        prop="address"
        label="地址"
        >
      </cl-table-column>
      <cl-table-column
        prop="phone"
        label="电话">
      </cl-table-column>
      <cl-table-column
        prop="xxxx"
        label="飞机">
      </cl-table-column>
    </cl-table>
    
  </div>
</template>
<script>
import ClButton from "@/components/button/button";
import ClToast from "@/components/toast/toast";
import ClTable from '@/components/table/table';
import ClTableColumn from '@/components/table/table-column.vue';



export default {
  components: {
    ClButton,
    ClTableColumn,
    ClTable
  },
  data() {
    return {
      flag: true,
      activeName: 'second',
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            phone:'13444444',
            xxxx:'456748798'
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
          }]
    };
  },
  methods: {
    handleClick(tab) {
      this.$toast({
        message:'hahahah'
      })
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
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