<template>
    <transition name="fade-confirm">
        <div class="cl-confirm" v-show="visible">
            <div class="confirm-info">
                <div class="info-title">{{title}}</div>
                <div class="info-message">
                    <cl-icon name="warning" class="cl-icon"></cl-icon>
                    <p class="text">{{message}}</p>
                </div>
                <div class="button-wrapper">
                    <cl-button @click="onClick('cancle')">{{cancleText}}</cl-button>
                    <cl-button @click="onClick('confirm')" primary>{{confirmText}}</cl-button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import ClIcon from "../icon/icon.vue";
import ClButton from "../button/button.vue";
export default {
  name: "cl-message-box",
  components: { ClButton, ClIcon },
  props: {
    title: { type: String, default: "提示" },
    message: String,
    confirmText: { type: String, default: "继续" },
    cancleText: { type: String, default: "取消" }
  },
  data() {
    return { promiseStatus: null, visible: false };
  },
  methods: {
    onClick(type) {
      if (type === "cancle") {
        this.promiseStatus.reject();
      } else {
        this.promiseStatus.resolve();
      }
      this.visible = false;
      this.$el.addEventListener("transitionend", this.destroyEle);
    },
    confirm() {
      return new Promise((resolve, reject) => {
        this.promiseStatus = { resolve, reject };
      });
    },
    destroyEle() {
      this.$el.removeEventListener("transitioncancel", this.destroyEle);
      this.$destroy();
    }
  },
  beforeDestroy() {
    this.$el.remove();
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/index.scss";
.cl-confirm {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  > .confirm-info {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 400px;
    height: 150px;
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    box-shadow: $shadow;
    line-height: 1.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    > .info-title {
      font-size: 16px;
      font-weight: 600;
      color: $brand;
    }
    > .info-message {
      display: flex;
      justify-content: flecl-start;
      align-items: center;
      color: $main;
      padding-left: 10px;
      font-size: 14px;
      height: 50px;
      > .cl-icon {
        color: $warning;
        margin-right: 4px;
        width: 30px;
        height: 30px;
      }
    }
    > .button-wrapper {
      text-align: end;
    }
  }
}
.fade-confirm-enter-active,
.fade-confirm-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-confirm-enter-to,
.fade-confirm-leave {
  opacity: 1;
}
.fade-confirm-enter,
.fade-confirm-leave-to {
  opacity: 0;
}
</style>