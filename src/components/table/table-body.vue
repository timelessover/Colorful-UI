<template>
    <div class="cl-table__body-wrapper">
        <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            class="cl-table__body"
            style="width: 675px;"
        >
            <colgroup>
                <col
                    v-for="(item,index) in propList"
                    :key="index+1"
                    :name="`cl-table_${index + 1}_column_${index + 1}`"
                    :width="item.width || 206"
                >
            </colgroup>
            <tbody>
                <tr
                    class="cl-table-body--tr"
                    v-for="(item,index) in rootList"
                    :key="index"
                    @click="handleClick(item)"
                >
                    <!-- 循环column -->
                    <th
                        class="is-leaf"
                        colspan="1"
                        rowspan="1"
                        v-for="(prop1,j) in propList"
                        :key="j"
                    >
                        <div class="cell">{{propList && item[prop1.prop]}}</div>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import tableColumn from "./table-column.vue";
export default {
  components: {
    tableColumn
  },
  inject: ["tableRoot"],
  data() {
    return {
      propList: null,
      rootList: this.tableRoot.data
    };
  },
  mounted() {
    this.getPropList();
  },
  methods: {
    getPropList() {
      let arr = [];
      const propData = this.tableRoot.$slots.default.filter(item => {
        return item.tag !== undefined
      });
      const length = propData.length;
      for (let index = 0; index < length; index++) {
        const data = propData[index].componentOptions.propsData;
        arr.push(data);
      }
      this.propList = arr;
    },
    handleClick(item) {
      console.log(JSON.parse(JSON.stringify(item)));
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-table__body-wrapper {
  color:#606266;
  .cl-table__body {
    .cl-table-body--tr {
      &:hover {
        background: #f5f7fa;
      }
    }
    .is-leaf {
      border-bottom: 1px solid #ebeef5;
    }
  }
}
td,
th {
  padding: 12px 0;
  min-width: 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
  > .cell {
    display: inline-block;
    box-sizing: border-box;
    text-overflow: ellipsis;
    box-sizing: border-box;
    overflow: hidden;
    // text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>