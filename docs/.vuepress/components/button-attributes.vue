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
          param: "icon",
          des: "图标类名",
          type: "string",
          choice: "-",
          def: "—"
        },
        {
          param: "iconPosition",
          des: "图标位置",
          type: "string",
          choice: "left/right",
          def: "left"
        },
        {
          param: "size",
          des: "尺寸",
          type: "string",
          choice: "normal/large/small",
          def: "normal"
        },
        {
          param: "type",
          des: "类型",
          type: "string",
          choice: "default/primary/success/danger",
          def: "default"
        },
         {
          param: "loading",
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
          param: "native-type",
          des: "原生 type 属性",
          type: "boolean",
          choice: "button/submit/reset",
          def: "false"
        },
      ]
    };
  }
};
</script>
