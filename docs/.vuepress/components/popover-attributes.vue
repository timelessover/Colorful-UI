<template>
  <div class="base">
    <section>
      <h2>Attributes</h2>
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
          param: "trigger",
          des: "触发方式",
          type: "click/hover",
          choice: "-",
          def: "click"
        },
        {
          param: "title",
          des: "标题",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "content",
          des: "显示的内容，也可以通过 slot 传入 DOM",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "title",
          des: "标题",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "width",
          des: "宽度",
          type: "string, number",
          choice: "-",
          def: "15px"
        },
        {
          param: "position",
          des: "出现位置",
          type: "string",
          choice: "top/left/right/bottom",
          def: "top"
        },{
          param: "popClassName",
          des: "自定义Class",
          type: "string",
          choice: "-",
          def: "-"
        }
      ]
    };
  }
};
</script>
