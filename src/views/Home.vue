<template>
  <div id="home">
   <cl-select v-model="value" placeholder="请选择">
      <cl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></cl-option>
    </cl-select> 
  </div>
</template>
<script>
import ClButton from "@/components/button/button";
import ClSelect from "@/components/select/select";
import ClOption from "@/components/select/option";

export default {
  components: {
    ClButton,
    ClSelect,
    ClOption
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    handleClick(value) {
      console.log(value);
      this.activeName = value.name;
      // this.$message
      //   .confirm({
      //     title: "请确认操作",
      //     confirmText: "确定删除",
      //     cancleText: "取消删除",
      //     message: "永久删除该文件，是否继续？"
      //   })
      //   .then(() => {
      //     // this.$message.success({
      //     //   message: "删除成功",
      //     //   duration: 1500
      //     // });
      //   })
      //   .catch(() => {
      //     // this.$message.info({
      //     //   message: "已取消删除",
      //     //   duration: 1500
      //     // });
      //   });
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