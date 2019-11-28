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
          param: "separator",
          des: "分隔符",
          type: "string",
          choice: "-",
          def: "斜杠'/'"
        },
        {
          param: "separator-class",
          des: "icon 分隔符 class",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "to",
          des: "路由跳转对象，同 vue-router 的 to",
          type: "string/object",
          choice: "-",
          def: "-"
        },
        {
          param: "replace",
          des: "在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",
          type: "boolean",
          choice: "-",
          def: "false"
        }
      ]
    };
  }
};
</script>
