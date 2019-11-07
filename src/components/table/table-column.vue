<template>
  <div></div>
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
    }
  }
};
</script>