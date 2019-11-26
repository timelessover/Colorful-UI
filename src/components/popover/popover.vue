
<template>
  <div class="cl-popover">
    <slot name="reference"></slot>
    <transition name="fade">
      <div
        :class="container?containerObject:classObject"
        :style="{width:`${width}px`}"
        v-show="visible"
        ref="popover"
      >
        <slot name="content" v-if="container"></slot>
        <template v-else>
          <div class="cl-popover--title">{{title}}</div>
          <div class="cl-popover--content">{{content}}</div>
        </template>
      </div>
    </transition>
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
    position: {
      type: String,
      default: "top",
      validator: value => ["top", "bottom", "left", "right"].indexOf(value) > -1
    },
    container: {},
    trigger: {
      type: String,
      default: "click",
      validator: value => ["click", "hover"].indexOf(value) > -1
    },
    width: {
      type: [String, Number],
      default: "15"
    },
    title: {}
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    classObject() {
      return [
        "cl-popover--item",
        `position-${this.position}`,
        this.popClassName
      ];
    },
    containerObject() {
      return ["cl-popover--item", `date-position-${this.position}`];
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
        (this.$el && this.$el.contains(e.target)) ||
        (reference && reference.contains(e.target)) ||
        (popover && popover.contains(e.target))
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
$border-color: #ebeef5;
$border-radius: 4px;
.cl-popover {
  vertical-align: top;
  position: relative;
  font-size: 14px;
}
.cl-popover--item {
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.5));
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 1em 1.2em;
  word-break: break-all;
  z-index: 1;
  position: absolute;
  > .cl-popover--title {
    font-size: 16px;
    line-height: 1;
    margin-bottom: 12px;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    border: 8px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-150%);
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
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
    margin-top: 15px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: white;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translate(-100%, -75%);
    margin-left: -15px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
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
    transform: translate(45%, -75%);
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
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
.date-position-top {
  margin-top: -15px;
  &::before,
  &::after {
    left: 10px;
  }
  &::before {
    border-bottom: none;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    border-bottom: none;
    top: calc(100% - 1px);
  }
}
.date-position-bottom {
  position: absolute;
  top: 100%;
  margin-top: 15px;
  &::before,
  &::after {
    left: 10px;
  }
  &::before {
    border-top: none;
    border-bottom-color: white;
    bottom: 100%;
  }
  &::after {
    border-top: none;
    border-bottom-color: white;
    bottom: calc(100% - 1px);
  }
}
.date-position-left {
  margin-left: -15px;
  &::before,
  &::after {
    transform: translateY(-50%);
    top: 50%;
  }
  &::before {
    border-right: none;
    left: 100%;
  }
  &::after {
    border-left-color: white;
    border-right: none;
    left: calc(100% - 1px);
  }
}
.date-position-right {
  margin-left: 15px;
  &::before,
  &::after {
    transform: translateY(-50%);
    top: 50%;
  }
  &::before {
    border-left: none;
    right: 100%;
  }
  &::after {
    border-right-color: white;
    border-left: none;
    right: calc(100% - 1px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>