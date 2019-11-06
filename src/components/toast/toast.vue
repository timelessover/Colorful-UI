<template>
  <div
    :class="classObject"
    :style="positionStyle"
    v-show="visible"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <i :class="iconClass" v-if="iconClass"></i>
    <i :class="typeClass" v-else></i>
    <slot>
      <p v-if="!dangerouslyUseHTMLString" class="cl-toast__content">{{ message }}</p>
      <p v-else v-html="message" class="cl-toast__content"></p>
    </slot>
    <i v-if="showClose" class="cl-toast__closeBtn cl-icon--close" @click="close"></i>
  </div>
</template>
<script>
// 四种警告
const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};
export default {
  name: "cl-toast",
  data() {
    return {
      visible: true,
      message: "",
      duration: 3000,
      type: "info",
      iconClass: "",
      customClass: "",
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    };
  },
  computed: {
    classObject() {
      return [
        "cl-toast",
        this.type && !this.iconClass ? `cl-toast--${this.type}` : "",
        this.center ? "is-center" : "",
        this.showClose ? "is-closable" : "",
        this.customClass
      ];
    },
    typeClass() {
      return this.type && !this.iconClass
        ? `cl-toast__icon cl-icon--${typeMap[this.type]}`
        : "";
    },
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      };
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common/base.scss";
$font-size: 14px;
$toast-min-height: 30px;
$toast-min-width: 40vw;
$toast-bg: #edf2fc;
$info:$brand;
$warning: #e6a23c;
$error: #f56c6c;

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translate(-50%,-100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%,0%);
  }
}
.cl-toast {
  display: flex;
  align-items: center;
  font-size: $font-size;
  min-height: $toast-min-height;
  min-width: $toast-min-width;
  line-height: 1.8;
  padding: 0 16px;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(196, 193, 193, 0.5);
  position: fixed;
  left: 50%;
  transform:translateX(-50%);
  $animation-duration: 300ms;
  animation: slide-down 0.8s;
  &.cl-toast--info {
    color: $info;
  }
  &.cl-toast--success {
    color: $success;
  }
  &.cl-toast--warning {
    color: $warning;
  }
  &.cl-toast--error {
    color: $error;
  }
  &.is-center {
    justify-content: center;
  }
  .cl-toast__icon {
    margin-right: 10px;
  }
  .message {
    padding: 8px 0;
  }
  .cl-toast__closeBtn {
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }
}
</style>
