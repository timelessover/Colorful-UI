<template>
    <div class="base">
        <section>
            <h2>Header Attributes</h2>
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
            <h2>Aside Attributes</h2>
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
            <h2>Footer Attributes</h2>
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
                        <tr v-for="(item,index) in table3" :key="index">
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
          param: "height",
          des: "顶栏高度",
          type: "string",
          choice: "-",
          def: "10vh"
        }
      ],
      table2: [
        {
          param: "width",
          des: "侧边栏宽度",
          type: "string",
          choice: "-",
          def: "150px"
        }
      ],
      table3: [
        {
          param: "height",
          des: "底栏高度",
          type: "string",
          choice: "-",
          def: "10vh"
        }
      ]
    };
  }
};
</script>
