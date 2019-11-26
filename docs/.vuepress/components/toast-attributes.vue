<template>
  <div class="base">
    <section>
      <h2>Options</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in table" :key="index">
              <th>{{item.param}}</th>
              <th class="des">{{item.des}}</th>
              <th class="type">{{item.type}}</th>
              <td>{{item.choice}}</td>
              <td>{{item.def}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      table: [
        {
          param: "message",
          des: "消息文字",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "type",
          des: "主题",
          type: "string",
          choice: "success/warning/info/error",
          def: "info"
        },
        {
          param: "offset",
          des: "距离窗口顶部的偏移量",
          type: "number",
          choice: "-",
          def: "20"
        },
        {
          param: "duration",
          des: "显示时间, 毫秒。设为 0 则不会自动关闭	",
          type: "number",
          choice: "-",
          def: "3000"
        },
        {
          param: "type",
          des: "主题",
          type: "string",
          choice: "success/warning/info/error",
          def: "info"
        },
        {
          param: "center",
          des: "文字是否居中",
          type: "boolean",
          choice: "-",
          def: "false"
        },
         {
          param: "center",
          des: "文字是否居中",
          type: "boolean",
          choice: "-",
          def: "false"
        },
         {
          param: "dangerouslyUseHTMLString",
          des: "是否将 message 属性作为 HTML 片段处理",
          type: "boolean",
          choice: "-",
          def: "false"
        },
        {
          param: "iconClass",
          des: "自定义图标的类名",
          type: "string",
          choice: "-",
          def: "-"
        },
      ]
    };
  }
};
</script>
