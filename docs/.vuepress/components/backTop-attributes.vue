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
          param: "target",
          des: "触发滚动的对象",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "visibility-height	",
          des: "滚动高度达到此参数值才出现",
          type: "number",
          choice: "-",
          def: "200"
        },
        {
          param: "right",
          des: "控制其显示位置, 距离页面右边距",
          type: "number",
          choice: "-",
          def: "30"
        },
        {
          param: "bottom",
          des: "控制其显示位置, 距离页面底部距离",
          type: "number",
          choice: "-",
          def: "30"
        }
      ]
    };
  }
};
</script>
