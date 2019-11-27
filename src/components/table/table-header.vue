<template>
  <div class="cl-haeder--warpper">
    <table border="1" class="cl-table__header" style="width: 675px;">
      <colgroup>
        <col
          v-for="(item,index) in headList"
          :key="index+1"
          :name="`cl-table_${index+1}_column_${index+1}`"
          :width="item.width || 206"
        >
        <col name="gutter" width="0">
      </colgroup>
      <thead>
        <tr>
          <th v-for="(item,index) in headList" :key="index" class="cl-table-header--th is-leaf">
            <div class="cell">{{item.label}}</div>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: "cl-table-haeder",
  inject: ["tableRoot"],
  data() {
    return {
      headList: []
    };
  },

  mounted() {
    this.getHeadList();
  },
  methods: {
    getHeadList() {
      let arr = [];
      const headerData = this.tableRoot.$slots.default.filter(item => {
        return item.tag !== undefined
      });
      const length = headerData.length;
      for (let index = 0; index < length; index++) {
        const data = headerData[index].componentOptions.propsData;
        arr.push(data);
      }
      this.headList = arr;
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-haeder--warpper{
  cursor:default ;
  font-size: 16px;
  color: #909399;
  font-weight:700;
}
.is-leaf {
  border-bottom: 1px solid #ebeef5;
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