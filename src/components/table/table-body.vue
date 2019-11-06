<template>
    <div class="el-table__body-wrapper">
        <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            class="el-table__body"
            style="width: 675px;"
        >
            <tbody>
                <tr class="" v-for="(item,index) in tableRoot.data" :key="index">
                    <th colspan="1" rowspan="1" class="el-table_93_column_393 is-leaf" v-for="(prop1,j) in propList" :key="j">
                        <div class="cell">{{propList && item[prop1.prop]}}</div>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import tableColumn from './table-column.vue';
export default {
  components: {
      tableColumn,
  },
  inject: ["tableRoot"],
  data() {
      return {
          propList: null
      }
  },
  mounted() {
    this.getPropList()
  },
  methods: {
      getPropList() {
          let arr = []
          const propData = this.tableRoot.$slots.default 
          const length = propData.length
          for (let index = 0; index < length; index++) {
              const data = propData[index].componentOptions.propsData
              arr.push(data)
          }
          this.propList = arr
      }
  },
};
</script>

<style lang="scss" scoped>
</style>