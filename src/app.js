import Vue from  'vue';
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";


Vue.component('p-button',Button)
Vue.component('p-icon',Icon)
Vue.component('p-button-group', ButtonGroup)
Vue.component('p-input', Input)

new Vue({
    el: '#app',
    data:{
        loading1:true,
        loading2: false,
        loading3: true,
        message:"hi"
    },
    methods:{
        inputChange(e){
            console.log(e.target.value);
        }
    }
})