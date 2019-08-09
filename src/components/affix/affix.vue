<template>
    <div class="cl-affix-warpper" ref="affix_warper">
        <div :class="[classObjet]" ref="affix">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "cl-affix",
  data() {
    return {
      fixed: false
    };
  },
  props: {
    top: {
      type: Number
    },
    left: {
      type: Number
    }
  },
  mounted() {
    let affix = this.$refs.affix;
    window.addEventListener("scroll", this.getTop);
  },
  computed: {
    classObjet() {
      return ["cl-affix-item"];
    }
  },
  methods: {
    getTop() {
      let affix = this.$refs.affix;
      let warper = this.$refs.affix_warper
      let getTop = warper.getBoundingClientRect().top;
      if (getTop <= 0) {
        this.changeFixed(affix);
      } else {
        this.changeBack(affix);
      }
    },
    changeFixed(affix) {
      affix.style.position = "fixed";
      affix.style.top = 0;
    },
    changeBack(affix) {
      affix.style.position = "relative";
    }
  }
};
</script>

<style lang="scss" scoped>
.cl-affix-warpper {
  position: absolute;
  top: 50px;
}
.cl-affix-item {
  height: 20px;
  width: 500px;
  background: red;
}
</style>