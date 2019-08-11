<template>
  <div>
    <cl-button>默认按钮</cl-button>
    <cl-button :loading=true>默认按钮</cl-button>
  </div>
</template>

<script>
import Button from "../../../src/components/button/button";
export default {
  components: {
    "cl-button": Button
  }
};
</script>

<style lang="scss" scoped>
</style>