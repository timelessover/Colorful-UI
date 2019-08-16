
<template>
  <div class="cl-popover">
    <transition name="fade">
      <div
        :class=classObject
        v-show="visible"
        ref="popover"
      >{{content}}</div>
    </transition>
    <slot name="reference"></slot>
  </div>
</template>

<script>
export default {
  name: "cl-popover",
  props: {
    popClassName: {
      type: String
    },
    content: {
      type: [Number, String]
    },
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator: value => ["top", "bottom", "left", "right"].indexOf(value) > -1
    },
    trigger: {
      type: String,
      default: "click",
      validator: value => ["click", "focus", "hover"].indexOf(value) > -1
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    classObject() {
      return ["cl-popover--item", `position-${position}`,this.popClassName];
    }
  },
  mounted() {
    this.addPopoverListenser();
  },
  methods: {
    addPopoverListenser() {
      let reference = this.$slots.reference[0].elm;
      let popover = this.$refs.popover;
      let trigger = this.trigger;
      if (trigger === "hover") {
        reference.addEventListener("mouseover", this.handleShow);
        reference.addEventListener("mouseleave", this.handleHide);
        popover.addEventListener("mouseover", this.handleShow);
        popover.addEventListener("mouseleave", this.handleHide);
      } else if (trigger === "click") {
        reference.addEventListener("click", this.handleToggle);
        document.addEventListener("click", this.handleDocumentClick);
      }
    },
    handleShow() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    handleToggle() {
      this.visible = !this.visible;
    },
    handleDocumentClick(e) {
      let reference = this.reference || this.$refs.reference;
      const popover = this.popover || this.$refs.popover;
      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (
        this.$el.contains(e.target) ||
        reference.contains(e.target) ||
        popover.contains(e.target)
      )
        return;
      this.visible = false;
    },
    handleAfterEnter() {
      this.$emit("after-enter");
    },
    handleAfterLeave() {
      this.$emit("after-leave");
    },
    removePopoverListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.removeEventListener("click", this.onClick);
      } else {
        this.$refs.popover.removeEventListener("mouseenter", this.open);
        this.$refs.popover.removeEventListener("mouseleave", this.close);
      }
    },
    destroyed() {
      this.removePopoverListeners();
    }
  }
};
</script>
    
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.cl-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.cl-popover--item {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.5em 1em;
  word-break: break-all;
  z-index: 1;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>