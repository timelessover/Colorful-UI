<template>
  <div class="base">
    <section>
      <h2>Row Attributes</h2>
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
            <tr v-for="(item,index) in table1" :key="index">
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
    <section>
      <h2>Col Attributes</h2>
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
            <tr v-for="(item,index) in table2" :key="index">
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
      table1: [
        {
          param: "gutter",
          des: "栅格间隔",
          type: "number",
          choice: "-",
          def: "0"
        }
      ],
      table2: [
        {
          param: "span",
          des: "栅格占据的列数",
          type: "number",
          choice: "-",
          def: "24"
        },
        {
          param: "offset",
          des: "栅格左侧的间隔格数",
          type: "number",
          choice: "-",
          def: "0"
        },
        {
          param: "xs",
          des: "<768px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          choice: "-",
          def: "-"
        },
        {
          param: "sm",
          des: "≥768px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          choice: "-",
          def: "-"
        },
         {
          param: "md",
          des: "≥992px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          choice: "-",
          def: "-"
        },
        {
          param: "lg",
          des: "≥1200px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          choice: "-",
          def: "-"
        },
        {
          param: "xl",
          des: "≥1920px 响应式栅格数或者栅格属性对象",
          type: "number/object (例如： {span: 4, offset: 4})",
          choice: "-",
          def: "-"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>