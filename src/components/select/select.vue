<template>
    <div>
        <ClPopover ref="popover" @change="handleVisble" position="bottom" :container="popoverContainer">
            <ClInput
                slot="reference"
                type="text"
                :placeholder="placeholder"
                readonly
                ref="input"
                :value="value"
            >
            <ClIcon name="arrow-up" slot="suffix" class="cl-icon" :class="{'open':show}"></ClIcon>
            </ClInput>
            <template slot="content">
                <div class="cl-options__container" :style="{width}">
                    <ul class="cl-options__list" @click="handleClick($event)">
                        <slot/>
                    </ul>
                </div>
            </template>
        </ClPopover>
    </div>
</template>

<script>
import ClPopover from "../popover/popover.vue";
import ClIcon from "../icon/icon.vue";
import ClInput from "../input/input.vue";
export default {
  components: {
    ClPopover,
    ClInput,
    ClIcon
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      popoverContainer: null,
      width: "",
      show:false
    };
  },
  provide() {
    return {
      root: this
    };
  },
  mounted() {
    this.width = this.$refs.input.$el.getBoundingClientRect().width + "px";
    this.popoverContainer = this.$slots.default;
  },
  methods: {
    handleClick(e) {
      this.$refs.popover.handleHide();
    },
    handleVisble(visible){
       this.show = visible
    }
  }
};
</script>

<style lang="scss" scoped>
$class-prefix: "cl-options__";
.#{$class-prefix}container {
  max-height: 274px;
  > .#{$class-prefix}list {
    list-style: none;
    padding: 6px 0;
    margin: 0;
    box-sizing: border-box;
  }
}
.cl-icon{
    transform: rotate(0deg);
    transition: .5s;
    &.open{
       transform: rotate(180deg); 
    }
}

</style>