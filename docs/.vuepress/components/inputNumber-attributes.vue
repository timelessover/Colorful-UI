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
     <section>
      <h2>Events</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>事件名称</th>
              <th class="des">说明</th>
              <th class="type">回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in table1" :key="index">
              <th>{{item.name}}</th>
              <th class="des">{{item.des}}</th>
              <th class="type">{{item.cb}}</th>
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
          param: "value / v-model",
          des: "绑定值",
          type: "string / number",
          choice: "-",
          def: "value"
        },
        {
          param: "min",
          des: "设置计数器允许的最小值",
          type: "number",
          choice: "—",
          def: "-Infinity"
        },
        {
          param: "max",
          des: "设置计数器允许的最大值",
          type: "number",
          choice: "-",
          def: "Infinity"
        },
      ],
      table1: [
          {
              name:'change',
              des: '绑定值被改变时触发',
              cb: 'currentValue'
          }
      ]
    }
  },
}
</script>
