<template>
    <label class="el-checkbox">
        <span class="el-checkbox__input">
            <span class="el-checkbox__inner"></span>
            <input
                class="el-checkbox__original"
                type="checkbox"
                :name="name"
                :disabled="isDisabled"
                v-model="model"
                @change="handleChange"
            >
        </span>
        <span class="el-checkbox__label" v-if="$slots.default || label">
            <slot></slot>
            <!-- <template v-if="!$slots.default">{{label}}</template> -->
        </span>
    </label>
</template>

<script>
export default {
  props: {
    value: {},
    label: {},
    name: String,
    disabled: Boolean,
    checked: Boolean
  }
};
</script>

<style lang="scss" scoped>
</style>