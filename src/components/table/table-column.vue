<template>
  <th colspan="1" rowspan="1" class="el-table_93_column_393 is-leaf">
    <div class="cell">{{prop}}</div>
  </th>
</template>

<script>
export default {
  name: "cl-table-column",
  props: {
    prop: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String]
    },
    item:{}
  },
  mounted(){
    this.item
  }
};
</script>