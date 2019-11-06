import Vue from 'vue';
import toast from './toast.vue';
let MessageConstructor = Vue.extend(toast);

// 单例模式封装

let instance;
let instances = [];
let seed = 1;

const Toast = function(options) {
  options = options || {};
  // 只传入 message 
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  // 用户控制onclose
  let userOnClose = options.onClose;
  // 每个Toast id
  let id = 'message_' + seed++;
  // 关闭时候的回调，每个id对应相对的回调
  options.onClose = function() {
    Toast.close(id, userOnClose);
  };
  // 单例模式
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);

  let verticalOffset = options.offset || 20;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  instance.verticalOffset = verticalOffset;
  instance.visible = true;
  instance.$el.style.zIndex = 2000 + seed;
  // 加入单例队列
  instances.push(instance);
  return instance;
};
//  直接选择Toast状态，Toast.succuss()
['success', 'warning', 'info', 'error'].forEach(type => {
  Toast[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Toast(options);
  };
});
// 手动关闭Toast
Toast.close = function(id, userOnClose) {
  let len = instances.length;
  let index = -1;
  let removedHeight;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight;
      index = i;
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  for (let i = index; i < len - 1 ; i++) {
    let dom = instances[i].$el;
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};
// 关闭全部
Toast.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Toast;