<template>
  <span v-if="type=== 'text'"  :class="classObject"><slot/></span>
  <button v-else :class="[classObject , getIconPosition]" @click="clickHandler" :disabled="isDisabled">
    <Icon class="icon" v-if="icon && !loading" :name="icon"/>
    <Icon class="loading icon" v-if="loading" name="loading"></Icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
import Icon from "../icon/icon";
import { Wave } from "../../utils/wave";
const COMPONENT_NAME = "cl-button";

export default {
  name: COMPONENT_NAME,
  components: {
    Icon
  },
  mixins: [Wave],
  props: {
    icon: {
      type: String,
      default: ""
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
      default: "normal",
      validator: val => ["normal", "large", "small"].indexOf(val) > -1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: val => ["left", "right"].indexOf(val) > -1
    }
  },
  computed: {
    classObject() {
      const { type, size, isDisabled, loading } = this;
      return [
        "cl-btn",
        type,
        { loading: loading },
        { disabled: isDisabled },
        size
      ];
    },
    getIconPosition() {
      const icon = this.icon;
      const loading = this.loading;
      if (icon || loading) return `icon-${this.iconPosition}`;
    },
    isDisabled() {
      return this.loading || this.disabled;
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
@import "../../styles/common/base.scss";
.cl-group-btn {
  border-radius: 0;
  &:not(:first-child) {
    margin-left: -1px;
  }
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

.cl-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  padding: 4px 15px;
  border: 1px solid;
  color: $main;
  border-color: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &.large {
    font-size: 16px;
    line-height: 24px;
    padding: 6px 15px;
  }
  &.small {
    font-size: 12px;
    line-height: 20px;
    padding: 2px 10px;
  }
  &.disabled {
    color: rgba(0, 0, 0, 0.25);
    border-color: #d9d9d9;
    background-color: #e6e6e6;
    cursor: default;
    &:hover {
      color: rgba(0, 0, 0, 0.25);
      border-color: #d9d9d9;
    }
  }
  &.primary {
    color: #fff;
    background-color: $brand;
    border-color: $brand;
    &:hover {
      background-color: $hover;
      border-color: $hover;
    }
    &.disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }
  &.success {
    color: #fff;
    background-color: $success;
    border-color: $success;
    &:hover {
      background-color: $success;
      border-color: $success;
    }
    &.disabled {
      color: #a4da89;
      background-color: #f0f9eb;
      border-color: #e1f3d8;
    }
  }
  &.danger {
    color: #fff;
    background-color: $error;
    &.disabled {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
    &:hover {
      border-color: $error;
      &.disabled {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
    }
  }
  &.default {
    &.disabled {
      background-color: #fff;
      border-color: #ebeef5;
      color: #c0c4cc;
    }
    &:hover {
      color: $brand;
      border-color: $brand;
      z-index: 1;
      &.disabled {
        background-color: #fff;
        border-color: #ebeef5;
        color: #c0c4cc;
      }
    }
  }
  &:focus {
    outline: none;
    z-index: 1;
  }

  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: 0.2em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2em;
    }
  }

  .loading {
    @include spin;
  }
}
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

