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
          param: "distance",
          des: "粘滞位置距离窗口顶部的距离",
          type: "number",
          choice: "-",
          def: "10"
        },
      ]
    };
  }
};
</script>
