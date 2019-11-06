<template>
  <div class="cl-table" :class="classObject">
    <cl-table-header></cl-table-header>
    <ClTabBody></ClTabBody>
  </div>
</template>

<script>
import ClTableHeader from "./table-header.vue";
import ClTabBody from './table-body.vue';
export default {
  components: {
     ClTabBody,
     ClTableHeader
  },
  provide() {
    return {
      tableRoot: this
    };
  },
  props: {
    data: {
      type: Array
    }
  },
  computed: {
    classObject() {
      return []
    }
  },
};
</script>

<style lang="scss" scoped>
</style>