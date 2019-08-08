// <el-popover
//     placement="top-start"
//     title="标题"
//     width="200"
//     trigger="hover"
//     content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
//     <el-button slot="reference">hover 激活</el-button>
//   </el-popover>
        
<template>
    <div class="cl-popover">
        <div class="cl-popover__item" v-show="open" ref="popover">{{content}}</div>
        <slot name="reference"></slot>
    </div>
</template>

<script>
export default {
  props: {
    content: {
      type: [Number, String]
    },
    visible: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: "click",
      validator: value => ["click", "focus", "hover"].indexOf(value) > -1
    }
  },
  data() {
    return {
      open: false
    };
  },
  mounted() {
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
  methods: {
    handleShow() {
      this.open = true;
    },
    handleHide() {
      this.open = false;
    },
    handleToggle() {
      this.open = !this.open;
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
      this.open = false;
    },
    handleAfterEnter() {
      this.$emit("after-enter");
    },
    handleAfterLeave() {
      this.$emit("after-leave");
      this.doDestroy();
    }
  },
  destroyed() {
    const reference = this.reference;
  }
};
</script>
    
<style lang="scss" scoped>
.cl-popover {
  height: 100px;
  width: 100px;
  margin: 200px auto;
  position: relative;
  .cl-popover__item {
    position: absolute;
    left: -75px;
    top: -60px;
    height: 50px;
    width: 100px;
    background: blue;
  }
}
</style>