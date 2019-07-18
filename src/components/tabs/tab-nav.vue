<template>
  <div>
    <ul>
      <li :class="[{'isActive':isActive == index}]" v-for="(item,index) in list" :key="index"  @click="handleClick(index)">{{item.label}}</li>
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
        tabIndex: 0,
      }
    },
    computed:{
      isActive(){
        return this.rootTabs.index
      }
    },
    created () {
      this.getTabList()
    },
    methods: {
      handleClick(e){
        this.rootTabs.$emit('tabs',e)
        this.rootTabs.index = e
        this.tabIndex = e
      },
      getTabList(){
        let item = this.rootTabs.$slots.default
        let list = item.map(item => {
          return item.data.attrs
        })
        this.list = list
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "@/styles/variable.scss";
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