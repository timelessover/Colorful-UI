<template>
    <div class="p-button-group"><slot></slot>    </div>
    
</template>
<script>
export default {
    mounted(){
        for(let node of this.$el.children){
            let name =node.nodeName.toLowerCase()
            if(name !=='button'){    
                console.warn(`p-button-group内子元素应该都是p-button,但是你写的是${name}`)
            }
        }
        
    }
}
</script>
<style lang="scss" scoped>
    .p-button-group{
        display: inline-flex;
        vertical-align: middle;
        
        > .p-button{
            border-radius: 0;
            margin-left:-1px;
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative; //经过后浮动到最上方
                z-index: 1;
            }
        }
    }
</style>
