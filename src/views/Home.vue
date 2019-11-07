<template>
  <div id="home">
    <cl-breadcrumb separator="/">
      <cl-breadcrumb-item :to="{ path: '/' }">首页</cl-breadcrumb-item>
      <cl-breadcrumb-item>
        <a href="/">活动管理</a>
      </cl-breadcrumb-item>
      <cl-breadcrumb-item>活动列表</cl-breadcrumb-item>
      <cl-breadcrumb-item>活动详情</cl-breadcrumb-item>
    </cl-breadcrumb>
  </div>
</template>
<script>
import ClButton from "@/components/button/button";
import ClCollapse from "@/components/collapse/collapse";
import ClCollapseItem from "@/components/collapse/collapse-item";
import ClTable from "@/components/table/table";
import ClTableColumn from "@/components/table/table-column.vue";
import ClBreadcrumb from "@/components/breadcrumb/breadcrumb";
import ClBreadcrumbItem from "@/components/breadcrumb/breadcrumb-item";
import ClCard from "@/components/card/card";

export default {
  components: {
    ClButton,
    ClCard,
    ClBreadcrumb,
    ClBreadcrumbItem
  },
  data() {
    return {
      flag: true,
      activeNames: ["1"],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "13444444",
          xxxx: "456748798"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClick(tab) {
      this.$toast({
        message: "hahahah"
      });
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
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 0 auto;
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