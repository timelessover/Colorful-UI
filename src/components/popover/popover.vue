// <el-popover
//     placement="top-start"
//     title="标题"
//     width="200"
//     trigger="hover"
//     content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
//     <el-button slot="reference">hover 激活</el-button>
//   </el-popover>
        
<template>
    <div class="cl-popover">
        <slot name="reference"></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .cl-popover{
        height:100px;
        width:100px;
    }
</style>