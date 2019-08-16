<template>
  <div class="cl-cascader" ref="cascader" v-click-outside="close">
    <div class="cl-trigger" @click="popoverVisible = !popoverVisible">{{result || '&nbsp;'}}</div>
    <div class="cl-popover-wrapper" v-if="popoverVisible">
      <cascade-items
        class="popover"
        :load-data="loadData"
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
        :loading-item="loadingItem"
      ></cascade-items>
    </div>
  </div>
</template>
<script>
import CascadeItems from './cascade-items'
import ClickOutside from '../../utils/click-outside'
import {removeListener} from '../../utils/click-outside'

export default {
  name: 'cl-cascade',
  components: { CascadeItems },
  directives: {
    ClickOutside
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    }
  },
  data() {
    return {
      popoverVisible: false,
      loadingItem: {}
    }
  },
  computed: {
    result() {
      return this.selected.map(item => item.name).join('/')
    }
  },
  destroyed() {
    removeListener()
  },
  methods: {
    close(){
      this.popoverVisible = false;
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      }
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) { return found }
          else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
      }
      let updateSource = (result) => {
        this.loadingItem = {}
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result
        this.$emit('update:source', copy)
      }
      if (!lastItem.isLeaf && this.loadData) {
        this.loadData(lastItem, updateSource) // 回调:把别人传给我的函数调用一下
        this.loadingItem = lastItem
      }
      // 调回调的时候传一个函数,这个函数理论应该被调用
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/common/base.scss";
.cl-cascader {
  position: relative;
  .cl-trigger {
    height: $input-height;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
  .cl-popover-wrapper {
    position: absolute;
    display: flex;
    top: 100%;
    left: 0;
    margin-top: 8px;
    @extend .box-shadow;
    background: white;
    z-index: 1;
  }
}
</style>
