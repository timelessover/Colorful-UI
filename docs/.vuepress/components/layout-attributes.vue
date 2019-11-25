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
            <tr v-for="(item,index) in table1" :key="item">
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
            <tr>
              <td>span</td>
              <td class="des">栅格占据的列数</td>
              <td class="type">number</td>
              <td>—</td>
              <td>24</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">栅格左侧的间隔格数	</td>
              <td class="type">number</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">栅格左侧的间隔格数	</td>
              <td class="type">number</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">栅格左侧的间隔格数	</td>
              <td class="type">number</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">栅格左侧的间隔格数	</td>
              <td class="type">number</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">栅格左侧的间隔格数	</td>
              <td class="type">number</td>
              <td>—</td>
              <td>0</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">栅格左侧的间隔格数	</td>
              <td class="type">number</td>
              <td>—</td>
              <td>0</td>
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
          {param:'gutter',
           des:'栅格间隔',
           type: 'number',
           choice:'-',
           def:'0'
          }
        ],
        table2: []
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>