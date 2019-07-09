<template>
  <button :class="classObject" @click="clickHandler">
    <c-icon class="icon" v-if="icon && !loading" :name="icon"/>
    <c-icon class="loading icon" v-if="loading" name="loading"></c-icon>
    <div class="cl-btn-content">
      <slot/>
    </div>
  </button>
</template>
<script>
import Icon from "../icon/icon";

const COMPONENT_NAME = 'cl-button'
export default {
  name: COMPONENT_NAME,
  components: {
    "c-icon": Icon
  },
  props: {
    icon: {
      type: String,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size:{
      type: String,
      default: 'normal'
    },
    shape: {
      type: String,
      default: 'square'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right"
      }
    }
  },
  computed: {
      classObject () {
        return [
          'cl-btn',
          `icon-${this.iconPosition}`,
          `cl-btn-${this.type}`,
          { 'cl-btn-loading': this.loading },
          { 'cl-btn-disabled': this.disabled },
          `cl-btn-${this.shape}`,
          `cl-btn-${this.size}`
        ]
      }
    },
    methods: {
      clickHandler (e) {
        if(this.disabled){
          e.preventDefault()
          e.stopPropagation()
          return
        }
        this.$emit('click', e)
      }
    }
};
</script>
<style lang="scss" scoped>
@import "@/styles/common/base.scss";

.cl-btn {
    font-size: $font-size;
    padding: 12px 20px;;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    color: $color;
    line-height: 1;
    &:hover {
        border-color: $border-color-hover;
    }

    &:active {
        background-color: $button-active-bg;
    }

    &:focus {
        outline: none;
    }

    >.cl-btn-content {
        order: 2;
    }

    >.icon {
        order: 1;
        margin-right: 0.1em;
    }

    &.icon-right {
        >.cl-btn-content {
            order: 1;
        }

        >.icon {
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
