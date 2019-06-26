<template>
  <button class="c-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <c-icon class="icon" v-if="icon && !loading" :name="icon"/>
    <c-icon class="loading icon" v-if="loading" name="loading"></c-icon>
    <div class="c-button-content">
      <slot/>
    </div>
  </button>
</template>
<script>
import Icon from "../icon";
export default {
  name: "c-Button",
  components: {
    "c-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/button";
</style>
