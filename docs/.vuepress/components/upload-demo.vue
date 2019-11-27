<template>
    <div class="demo">
        <p>通过点击上传文件</p>
        <h3>基础用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-uploader
                    accept="image/*"
                    method="POST"
                    action="http://127.0.0.1:3000/upload"
                    name="file"
                    :parseResponse="parseResponse"
                    :file-list.sync="fileList"
                    @error="error=$event"
                    :size-limit="1024*1024"
                >
                    <cl-button icon="upload">上传</cl-button>
                </cl-uploader>
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
import ClButton from "@/button/button";
import mixin from "../mixin";
import ClUploader from "@/upload/upload";
import Attributes from "./upload-attributes.vue";
export default {
  name: "upload-demo",
  mixins: [mixin],
  components: {
    ClButton,
    ClIcon,
    ClUploader,
    Attributes
  },
  data() {
    return {
      fileList: [],
      error: "",
      codeStr:`
      <cl-uploader
            accept="image/*"
            method="POST"
            action="http://127.0.0.1:3000/upload"
            name="file"
            :parseResponse="parseResponse"
            :file-list.sync="fileList"
            @error="error=$event"
            :size-limit="1024*1024"
            >
            <cl-button icon="upload">上传</cl-button>
        </cl-uploader>
        
data() {
  return {
    fileList: [],
    error: '',             
  }
},
methods: {
  parseResponse (response) {
    let object = JSON.parse(response)
    let url = 'http://127.0.0.1:3000/preview/'+object.id
    return url
  },      
  updateFileList(newFileList){
    this.fileList = newFileList
  }            
}
      `
    };
  },
  methods: {
    parseResponse(response) {
      let object = JSON.parse(response);
      let url = "http://127.0.0.1:3000/preview/" + object.id;
      return url;
    },
    updateFileList(newFileList) {
      this.fileList = newFileList;
    }
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>