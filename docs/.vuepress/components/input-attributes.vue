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
          param: "type",
          des: "类型",
          type: "string",
          choice: "text / textarea	",
          def: "text"
        },
        {
          param: "value / v-model",
          des: "绑定值",
          type: "string / number",
          choice: "-",
          def: "value"
        },
        {
          param: "placeholder",
          des: "输入框占位文本",
          type: "string",
          choice: "—",
          def: "—"
        },
        {
          param: "clearable",
          des: "是否可清空",
          type: "boolean",
          choice: "-",
          def: "false"
        },
         {
          param: "show-password",
          des: "是否加载中状态",
          type: "boolean",
          choice: "-",
          def: "false"
        },
        {
          param: "disabled",
          des: "是否禁用状态",
          type: "boolean",
          choice: "-",
          def: "false"
        },
        {
          param: "prefix-icon",
          des: "输入框头部图标",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "suffix-icon",
          des: "输入框尾部图标",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "readonly",
          des: "原生属性，是否只读",
          type: "boolean",
          choice: "-",
          def: "false"
        },
      ]
    }
  },
}
</script>
