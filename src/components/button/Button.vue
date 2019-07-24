//1. 添加icon
//2. 添加loading状态
//3. 控制大小和形状
//4. 禁用状态
//5. icon位置
//6. type类型 
//<cl-button :type="..." :icon=".." :loading="..." :size="..." :shape="..." :disabled="..." :iconPosition="..." ></cl-button>
<template>
  <button :class="[classObject , getIconPosition]" @click="clickHandler" :disabled="isDisabled">
    <cl-icon class="icon" v-if="icon && !loading" :name="icon"/>
    <cl-icon class="loading icon" v-if="loading" name="loading"></cl-icon>
    <div class="cl-btn-content">
      <slot/>
    </div>
  </button>
</template>
<script>
import Icon from "../icon/icon";

const COMPONENT_NAME = "cl-button";

export default {
  name: COMPONENT_NAME,
  components: {
    "cl-icon": Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: "default"
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal"
    },
    shape: {
      type: String,
      default: "square"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: val =>  ['left', 'right'].indexOf(val) > -1
    }
  },
  computed: {
    classObject() {
      return [
        "cl-btn",
        `cl-btn-${this.type}`,
        { "cl-btn-loading": this.loading },
        { "cl-btn-disabled": this.disabled },
        `cl-btn-${this.shape}`,
        `cl-btn-${this.size}`
      ];
    },
    getIconPosition(){
      const icon = this.icon
      const loading = this.loading
      if(icon || loading)  return `icon-${this.iconPosition}`
    },
    isDisabled() {
      return this.disabled;
    }
  },
  methods: {
    clickHandler(e) {
      if (this.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/common/base.scss";

.cl-btn {
  font-size: $--font-size-base;
  padding: 12px 20px;
  border-radius: $--border-radius-base;
  border: 1px solid $--border-color-base;
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

  > .cl-btn-content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .cl-btn-content {
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
