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
          param: "value/v-model",
          des: "选中项绑定值",
          type: "string/number/boolean",
          choice: "-",
          def: "-"
        },
        {
          param: "options",
          des: "可选项数据源",
          type: "array",
          choice: "-",
          def: "-"
        },
        {
          param: "placeholder",
          des: "输入框占位文本",
          type: "boolean",
          choice: "string",
          def: "请选择"
        },
        {
          param: "clearable",
          des: "是否支持清空选项",
          type: "boolean",
          choice: "-",
          def: "false"
        }
      ],
      table1: [
        {
          name: "change",
          des: "当选中节点变化时触发",
          cb: "选中节点的值"
        }
      ]
    };
  }
};
</script>
