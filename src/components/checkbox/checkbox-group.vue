<template>
    <div class="cl-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "cl-checkbox-group",
  props: {
    value: {
      type:Array
    },
  },
  data() {
    return {
      selectArray: []
    }
  },
  mounted(){
    this.selectArray = this.value
    this.selectArray.forEach((item)=>{
      this.$children.forEach((child)=>{
        if(item == child.$options.propsData.label){
            child.innerValue = true
        }
      })
    })
  },
  methods: {
    getLabel(label) {
      if(this.selectArray.indexOf(label)>-1) return;
      this.selectArray.push(label)
      this.$emit('input',this.selectArray)
    },
    removeLabel(label){
        if(this.selectArray.indexOf(label)>-1){
          let index = this.selectArray.findIndex(item=> item === label)
          this.selectArray.splice(index,1)
        }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>