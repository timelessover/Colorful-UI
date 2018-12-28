<template>
    <div class="warpper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text">
        <template v-if="error">
            <icon name="setting"></icon>
            <span>{{error}}</span>
        </template>
    </div>    
</template>
<script>
import Icon from './icon'
export default {
    components:{Icon},
    name:'P-input',
    props:{
        value:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        error:{
            type:String
        }
    }
}
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $boder-color-hover:#666;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#F1453D;
    .warpper{
        font-size:$font-size;
        display: inline-block;
        > input{
            height:32px;
            border:1px solid $border-color;
            border-radius: 4px;
            padding:0 8px;
            
            &:hover{
                border-color:#666;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }
            &[disabled],&[readonly]{
                border-color:#aaa;
                color:#aaa;
                cursor:not-allowed;
            }  
        }
        &.error{
        > input{border-color:$red;}
        }
    }
</style>
