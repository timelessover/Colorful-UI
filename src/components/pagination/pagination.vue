<template>
  <div class="cl-pager" :class="{hide: hideIfOnePage && total <=1 }">
    <span
      class="cl-pager-nav prev"
      :class="{disabled:currentPage===1,active:currentPage !== 1}"
      @click="onClickPage(currentPage - 1)"
    >
      <icon name="arrow-left"></icon>
    </span>
    <template v-for="(page, i) in pages">
      <template v-if="page === currentPage">
        <span :key="i" class="cl-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <icon :key="i" class="cl-pager-separator" name="more"></icon>
      </template>
      <template v-else>
        <span :key="i" class="cl-pager-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span
      class="cl-pager-nav next"
      :class="{disabled:currentPage===total,active:currentPage !==total}"
      @click="onClickPage(currentPage + 1)"
    >
      <icon name="arrow-right"></icon>
    </span>
  </div>
</template>
<script>
import Icon from "../icon/icon";

export default {
  name: "cl-pagination",
  components: { Icon },
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: 1
    },
    total: {
      type: Number,
      required: true,
      default: 10
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pages() {
      let { currentPage, total } = this;
      return unique([
        1,
        currentPage,
        currentPage - 1,
        currentPage - 2,
        currentPage + 1,
        currentPage + 2,
        total
      ])
        .filter(n => n >= 1 && n <= total)
        .sort((a, b) => a - b)
        .reduce((prev, current, index, array) => {
          prev.push(current);
          array[index + 1] &&
            array[index + 1] - array[index] > 1 &&
            prev.push("...");
          return prev;
        }, []);
    }
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.total) {
        this.$emit("update:currentPage", n);
      }
    }
  }
};
function unique(array) {
  const obj = {};
  array.map(number => {
    obj[number] = true;
  });
  return Object.keys(obj).map(s => parseInt(s, 10));
}
</script>
<style scoped lang="scss">
@import "../../styles/index.scss";
.cl-pager {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  $width: 20px;
  $height: 20px;
  $font-size: 12px;
  user-select: none;
  &.hide {
    display: none;
  }
  &-separator {
    width: $width;
    font-size: $font-size;
  }
  &-item {
    min-width: $width;
    height: $height;
    font-size: $font-size;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &.current,
    &:hover {
      border-color: $brand;
    }
    &.current {
      cursor: default;
    }
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $grey;
    height: $height;
    width: $width;
    border-radius: 4px;
    font-size: $font-size;
    &.active {
      &:hover {
        color: $brand;
        cursor: pointer;
      }
    }
    &.disabled {
      cursor: default;
      svg {
        fill: darken($grey, 30%);
      }
    }
  }
}
</style>