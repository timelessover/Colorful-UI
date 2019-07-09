<template>
<transition name="el-fade-in">
    <div
      v-if="visible"
      @click.stop="clickHandler($event)"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      class="cl-back-top">
      <slot>
        <el-icon name="caret-top"></el-icon>
      </slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'cl-back-top',
    data () {
      return {
        visible: false
      }
    },
    methods: {
      clickHandler (event) {
        document.body.scrollTop = 0
        this.$emit('click', event)
      }
    },
    mounted () {
      window.onscroll = () => {
        this.visible = document.body.scrollTop > 0
        console.log(document.body.scrollTop)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cl-back-top{
      bottom: 50px;
      right: 50px;
      position: fixed;
      background-color: #fff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #409eff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      box-shadow: 0 0 6px rgba(0,0,0,.12);
      cursor: pointer;
      z-index: 5;
      &:hover{
          background-color: #f2f6fc;
      }
  }
</style>

