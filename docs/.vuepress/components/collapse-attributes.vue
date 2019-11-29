<template>
    <div class="base">
        <section>
            <h2>Collapse Attributes</h2>
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
        </section>
        <section>
            <h2>Collapse Item Attributes</h2>
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
          des: "当前激活的面板",
          type: "string/array/number",
          choice: "-",
          def: "-"
        },
      ],
      table1: [
        {
          name: "change",
          des: "当前激活面板改变时触发",
          cb: "(activeNames: array / string)"
        }
      ],
      table2:[
           {
          param: "name",
          des: "唯一标志符",
          type: "string/number",
          choice: "-",
          def: "-"
        },
          {
          param: "title",
          des: "面板标题",
          type: "string",
          choice: "-",
          def: "-"
        },
      ]
    };
  }
};
</script>
