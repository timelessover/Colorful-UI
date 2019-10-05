<template>
  <Wave>
    <button :class="[classObject , getIconPosition]" @click="clickHandler" :disabled="isDisabled">
      <Icon class="icon" v-if="icon && !loading" :name="icon" />
      <Icon class="loading icon" v-if="loading" name="loading"></Icon>
      <div class="content">
        <slot />
      </div>
    </button>
  </Wave>
</template>
<script>
import Icon from "../icon/icon";
import Wave from "components/wave/wave";
const COMPONENT_NAME = "cl-button";

export default {
  name: COMPONENT_NAME,
  components: {
    Icon,
    Wave
  },
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
      default: "normal"
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
      return [
        "cl-btn",
        `${this.type}`,
        { loading: this.loading },
        { disabled: this.disabled },
        `${this.size}`
      ];
    },
    getIconPosition() {
      const icon = this.icon;
      const loading = this.loading;
      if (icon || loading) return `icon-${this.iconPosition}`;
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
@import "../../styles/common/base.scss";
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
    cursor: not-allowed;
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
      color: rgba(0, 0, 0, 0.25);
      border-color: #d9d9d9;
      background-color: #e6e6e6;
      cursor: not-allowed;
      &:hover {
        color: rgba(0, 0, 0, 0.25);
        border-color: #d9d9d9;
      }
    }
  }
  &.danger {
    color: $error;
    background-color: #f5f5f5;
    &:hover {
      color: #fff;
      background-color: $error;
      border-color: $error;
    }
    &:focus {
      color: $error;
      background-color: #fff;
      border-color: $error;
      &.disabled {
        border-color: #d9d9d9;
        color: rgba(0, 0, 0, 0.25);
        background-color: #e6e6e6;
      }
    }
  }
  &.disabled {
    color: rgba(0, 0, 0, 0.25);
    border-color: #d9d9d9;
    background-color: #e6e6e6;
    cursor: not-allowed;
    &:hover {
      color: rgba(219, 217, 217, 0.25);
      border-color: #d9d9d9;
    }
  }
  &.default {
    &:hover {
      color: $brand;
      border-color: $brand;
      z-index: 1;
    }
    &:focus {
      border-color: $brand;
    }
  }
  &:focus {
    outline: none;
    z-index: 1;
  }

  &.dashed {
    border-style: dashed;
  }
  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .content {
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
