<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'c-tabsBody',
    inject: ['eventBus'],
    created(){
    }
  }
</script>
<style>
  
</style>