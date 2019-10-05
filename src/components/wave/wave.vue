<template>
  <div class="wave">
      <span v-if="typeof node === 'string'" className="xue-wave-string-wrapper"><slot/></span>
      <slot v-else></slot>    
  </div>
</template>
<script>
export default {
  name: "cl-wave-animation-animating",
  props: {
    closeWave: Boolean
  },
  data() {
    return {
      node: null,
      animating: false,
      originClassName:''
    };
  },
  mounted() {
    this.node = this.$slots.default[0].elm
    this.originClassName = this.node.className
    this.node.addEventListener("click", this.animationStart);
  },
  
  beforeDestroy() {
    this.node.removeEventListener("click", this.animationStart);
    this.node.removeEventListener("animationend", this.animationEnd);
  },
  computed: {
    name() {
      return this.data;
    }
  },
  methods: {
    animationStart() {
      const activeName = " cl-wave-animation-animating"
      if (this.animating || this.closeWave) {
        return;
      }
      this.animating = true;
      this.originClassName = this.node.className;
      this.node.className = [this.originClassName + activeName];
      this.node.addEventListener("animationend", this.animationEnd);
    },
    animationEnd() {
      this.animating = false;
      this.node.className = this.originClassName;
      this.node.removeEventListener("animationend", this.animationEnd);
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-wave-animation-animating {
  position: relative;
  &::before {
    content: "";
    display: block;
    background-color: inherit;
    pointer-events: none;
    position: absolute;
    z-index: 1;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: inherit;
    border: 0 solid;
    border-color: inherit;
    opacity: 0.3;
    animation: cl-wave-animation 0.3s ease-in-out forwards;
    flex-shrink: 0;
  }
}

@keyframes cl-wave-animation {
  to {
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-width: 6px;
    opacity: 0;
  }
}
</style>