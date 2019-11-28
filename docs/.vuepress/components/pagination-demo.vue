<template>
    <div class="demo">
        <p>当数据量过多时，使用分页分解数据</p>
        <h3>基础用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-pagination :total="10" :current-page.sync="currentPage"></cl-pagination>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{baseMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(0)" ref="xxx">
                <cl-icon class="icon-down" :name=" isShow[0]=== false ? 'arrocl-down' : 'arrocl-up'"></cl-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
        <Attributes></Attributes>
    </div>
</template>

<script>
import ClIcon from "@/icon/icon";
import mixin from "../mixin";
import ClPagination from "@/pagination/pagination";
import Attributes from "./pagination-attributes.vue";
export default {
  name: "pagination-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClPagination,
    Attributes
  },
  data() {
    return {
      currentPage:1,
      codeStr:`<cl-pagination :total="10" :current-page.sync="currentPage"></cl-pagination>`
    }
  },
  computed: {
    baseMethods() {
      return this.trim(this.codeStr);
    },

  },

};
</script>

<style lang="scss" scoped>
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
.rocl-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>