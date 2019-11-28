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

  </div>
</template>

<script>
export default {
  data() {
    return {
      table1: [
        {
          param: "title",
          des: "标题内容",
          type: "string",
          choice: "-",
          def: "提示"
        },
       {
          param: "message",
          des: "正文内容",
          type: "String",
          choice: "-",
          def: "-"
        },
         {
          param: "confirmText",
          des: "确定按钮内容",
          type: "String",
          choice: "-",
          def: "-"
        },
         {
          param: "cancleText",
          des: "取消按钮内容",
          type: "String",
          choice: "-",
          def: "-"
        },
      ],

    };
  }
};
</script>

<style lang="scss" scoped>
</style>