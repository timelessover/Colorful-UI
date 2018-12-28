<template>
  <svg class="p-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
    name:'P-icon',
    props:['name']
};
</script>
<style lang="scss" scoped>
.p-icon {
            width: 1em;
            height: 1em;
        }
</style>
