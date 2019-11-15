<template>
  <div id="home">
    <cl-upload
      accept="image/*"
      method="POST"
      action="http://127.0.0.1:3000/upload"
      name="file"
      :parseResponse="parseResponse"
      :file-list.sync="fileList"
      @error="error=$event"
      :size-limit="1024*1024"
    >
      <cl-button type="primary" icon="upload">上传</cl-button>
    </cl-upload>
  </div>
</template>
<script>
import ClButton from "@/components/button/button";
import ClUpload from "@/components/upload/upload";
import ClPagination from "@/components/pagination/page";
import ClDropdownItem from "@/components/dropdown/dropdown-item";

export default {
  components: {
    ClButton,
    ClPagination,
    ClUpload
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
      error: ""
    };
  },
  methods: {
    handleChange(value) {
      this.currentPage = value;
    },
    parseResponse(response) {
      let object = JSON.parse(response);
      let url = "http://127.0.0.1:3000/preview/" + object.id;
      return url;
    },
    updateFileList(newFileList) {
      this.fileList = newFileList;
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