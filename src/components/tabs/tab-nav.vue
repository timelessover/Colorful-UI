<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index"  @click="handleClick(index)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"cl-tab-nav",
    props: {  },
    inject: ['rootTabs'],
    data() {
      return {
        tabs: 11,
      }
    },
    created () {
      let item = this.rootTabs.$slots.default
      let list = item.map(item => {
        return item.data.attrs
      })
      this.list = list
    },
    methods: {
      handleClick(e){
        this.rootTabs.$emit('tabs',e)
        this.rootTabs.index = e
      }
    },
  }
</script>

<style lang="scss" scoped>
ul{
  display: flex;
  justify-content: space-between;
  width:300px;
  li{
    &.isActive{
      color:red
    }
  }
}
</style>