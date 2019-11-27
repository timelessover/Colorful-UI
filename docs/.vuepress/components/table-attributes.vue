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
          param: "label",
          des: "显示的标题",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "prop",
          des: "对应列内容的字段名，也可以使用 property 属性",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "width",
          des: "对应列的宽度",
          type: "string",
          choice: "-",
          def: "-"
        },
         {
          param: "data",
          des: "数据源",
          type: "array",
          choice: "-",
          def: "-"
        },
      ]
    };
  }
};
</script>
