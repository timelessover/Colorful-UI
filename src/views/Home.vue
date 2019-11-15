<template>
  <div id="home">
    <cl-progress type="dashboard" :percentage="percentage" :color="colors"></cl-progress>
    <div>
      <cl-button-group>
        <cl-button icon="cl-icon-minus" @click="decrease"></cl-button>
        <cl-button icon="cl-icon-plus" @click="increase"></cl-button>
      </cl-button-group>
    </div>
  </div>
</template>
<script>
import ClButton from "@/components/button/button";
import ClMenu from "@/components/menu/menu";
import ClSubMenu from "@/components/menu/sub-menu";
import ClMenuItem from "@/components/menu/menu-item";

export default {
  components: {
    ClButton,
    ClMenuItem,
    ClSubMenu,
    ClMenu
  },
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      currentPage: 1,
      checked1: true,
      value: "",
      radio: "3",
      type1: true,
      type2: true,
      type3: true,
      value2: [],
      fileList: [],
      error: "",
      selected1: "1",
      percentage: 10,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    };
  },
  methods: {
    handleChange(value) {
      this.$message
        .confirm({
          title: "请确认操作",
          confirmText: "确定删除",
          cancleText: "取消删除",
          message: "永久删除该文件，是否继续？"
        })
        .then(() => {
          // this.$message.success({
          //   message: "删除成功",
          //   duration: 1500
          // });
        })
        .catch(() => {
          // this.$message.info({
          //   message: "已取消删除",
          //   duration: 1500
          // });
        });
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-slides-item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.cl-slides-item:nth-child(2n) {
  background-color: #99a9bf;
}

.cl-slides-item:nth-child(2n + 1) {
  background-color: #99a9bf;
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

.bocl-card {
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