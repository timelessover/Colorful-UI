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
import Icon from "../Icon";
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
@import "var";
.c-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .c-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .g-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    @include spin;
  }
}
</style>
