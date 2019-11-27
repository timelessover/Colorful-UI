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
          param: "name",
          des: "上传的文件字段名",
          type: "string",
          choice: "-",
          def: "-"
        },
        {
          param: "action",
          des: "上传的地址",
          type: "number",
          choice: "string",
          def: "-"
        },
        {
          param: "method",
          des: "上传的请求方法",
          type: "string",
          choice: "GET, POST",
          def: "POST"
        },
        {
          param: "method",
          des: "上传的请求方法",
          type: "string",
          choice: "GET, POST",
          def: "POST"
        },
        {
          param: "fileList",
          des: "上传的文件列表",
          type: "array",
          choice: "-",
          def: "-"
        },
        {
          param: "sizeLimit",
          des: "文件的数量限制",
          type: "Number",
          choice: "-",
          def: "-"
        },
        {
          param: "accept",
          des: "文件类型",
          type: "string",
          choice: "-",
          def: "image"
        },
      ],
      table1: [
          {
              name:'parseResponse',
              des: '成功上传的回调',
              cb: '200'
          }
      ]
    }
  },
}
</script>
