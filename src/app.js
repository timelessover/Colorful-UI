import Vue from  'vue';
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";

Vue.component('p-button',Button)
Vue.component('p-icon',Icon)
Vue.component('p-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data:{
        loading1:true,
        loading2: false,
        loading3: true
    }
})