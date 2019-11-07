
<template>
    <div class="cl-collapse">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "cl-collapse",
  props: {
    accordion: Boolean,
    value: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      activeNames: [...this.value]
    };
  },

  provide() {
    return {
      collapse: this
    };
  },

  watch: {
    value(value) {
      this.activeNames = [...this.value];
    }
  },

  methods: {
    setActiveNames(activeNames) {
      activeNames = [...this.activeNames];
      let value = this.accordion ? activeNames[0] : activeNames;
      this.activeNames = activeNames;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    handleItemClick(item) {
      if (this.accordion) {
        this.setActiveNames(
          (this.activeNames[0] || this.activeNames[0] === 0) &&
          this.activeNames[0] === item.name
            ? ""
            : item.name
        );
      } else {
        let activeNames = this.activeNames.slice(0);
        let index = activeNames.indexOf(item.name);

        if (index > -1) {
          activeNames.splice(index, 1);
        } else {
          activeNames.push(item.name);
        }
        this.setActiveNames(activeNames);
      }
    }
  },

  created() {
    this.$on("item-click", this.handleItemClick);
  }
};
</script>

<style lang="scss" scoped>
.cl-collapse{
    width: 50vw;
    margin: 50px;
}
</style>