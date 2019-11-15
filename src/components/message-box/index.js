import Vue from 'vue'
import confirmComponent from './message-box.vue'

const Message = {
  confirm(options) {
    const Constructor = Vue.extend(confirmComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: options
    }).$mount(div)
    vm.visible = true
    return vm.confirm()
  }
}

export default Message