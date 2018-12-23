<template>
    <button class="p-button" :class="{[`icon-${iconPosition}`]:true}"  @click="$emit('click')">
            <p-icon class="icon" v-if="icon && !loading" :name="icon"></p-icon>
            <p-icon class="loading icon" v-if="loading" name="loading"></p-icon>
    <div class="content">
        <slot></slot></div></button>
</template>
<script>
export default {
//    props:['icon','iconPosition']
   props:{
       icon:{},
       loading:{
           type:Boolean,
           default:false
       },
       iconPosition:{
           //属性检测器
           type:String,
           default:'left',
           validator(value){
               return value ==='left'|| value ==='right'
           }
       }
   }
}
</script>
<style scoped lang='scss'>
        @keyframes spin{
            0%{transform: rotate(0deg)}
            100%{transform: rotate(360deg)}
        }
       .p-button{
            font-size:var(--font-size);
            height:var(--button-height);
            padding:0 1em;
            border-radius: var(--border-radius);
            border:1px solid var(--border-color);
            background: var(--button-bg);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            padding:0  1em;
            &:hover{
            border-color:var(--border-color-hover)
        }
            &:active{
            background-color:var(--button-active-bg)
        }
            &:focus{
            outline: none;
        }
        > .icon{
            order:1; margin-right:.3em;
        }
        > .content{
            order: 2;
        }
        &.icon-right{
            > .icon{
              order:2;  margin-right:0em; margin-left:.3em;
            }
            > .content{
                order:1;
            }
        }
        .loading{
            animation:spin 2s infinite linear;
        }
        }
        
</style>
