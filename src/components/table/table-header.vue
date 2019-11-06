<template>
    <div class="cl-haeder--warpper">
        <table border="1" class="cl-table__header" style="width: 675px;">
            <thead>
                <tr>
                    <th
                        v-for="(item,index) in headList"
                        :key="index"
                        class="el-table_93_column_393 is-leaf"
                    >
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
      const headerData = this.tableRoot.$slots.default;
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
</style>