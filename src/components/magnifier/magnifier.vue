<template>
  <div class="cl-magnifier--wrap" ref="wrap">
    <div class="cl-magnifier--bigger" ref="bigger" v-show="visable">
      <img :src="currentImg" alt="">
    </div>
    <div class="imgs">
      <div
        class="cl-magnifier--main"
        ref="main"
        @mouseenter="handleEnter"
        @mouseleave="handleOut"
        @mousemove="handleMove"
      >
        <img :src="currentImg" alt="">
        <div class="cl-magnifier--mask" :style="positions" ref="mask" v-show="visable"></div>
      </div>
      <ul class="cl-magnifier--smaller">
        <li v-for="(item,index) in imgList" :key="index" @click="handleClick(index)">
          <img :src="item.path" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "cl-magnifier",
  props: {
    imgList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0,
      visable: false,
      pagex: 0,
      pagey: 0
    };
  },
  mounted() {},
  computed: {
    currentImg() {
      return this.imgList[this.currentIndex].path;
    },
    positions() {
      return { left: this.pagex + "px", top: this.pagey + "px" };
    }
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index;
    },
    handleEnter() {
      this.visable = true;
    },
    handleOut() {
      this.visable = false;
    },
    handleMove(event) {
      let e = event || window.event;
      this.$nextTick(() => {
        let main = this.$refs.main;
        let mask = this.$refs.mask;
        let wrap = this.$refs.wrap;
        let bigger = this.$refs.bigger;
        let bigPic = bigger.children[0];
        let page_x = e.pageX - (wrap.offsetLeft + mask.offsetWidth / 2);
        let page_y = e.pageY - (wrap.offsetTop + mask.offsetHeight / 2);
        let rest_width = main.offsetWidth - mask.offsetWidth;
        let rest_height = main.offsetHeight - mask.offsetHeight;
        //左上方边界值判断
        page_x = page_x < 0 ? 0 : page_x;
        page_y = page_y < 0 ? 0 : page_y;
        //右下边界判断
        page_x = page_x > rest_width ? rest_width : page_x;
        page_y = page_y > rest_height ? rest_height : page_y;
        this.pagex = page_x;
        this.pagey = page_y;
        //放大效果
        let scale =
          (bigPic.offsetWidth - bigger.offsetWidth) /
          (main.offsetWidth - mask.offsetWidth);
        let scale_x = page_x * scale;
        let scale_y = page_y * scale;
        bigPic.style.left = -scale_x + "px";
        bigPic.style.top = -scale_y + "px";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin zero {
  position: absolute;
  left: 0;
  top: 0;
}
img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.cl-magnifier--wrap {
  position: relative;
  top: 100px;
  left: 100px;
  width: 400px;
  height: 492px;
  .cl-magnifier--imgs {
    @include zero;
    width: 100%;
    height: 100%;
  }
}

.cl-magnifier--main {
  position: relative;
  overflow: hidden;
  padding: 4px;
  width: 390px;
  height: 390px;
  border: 1px solid #dadada;
}
.cl-magnifier--smaller {
  position: relative;
  overflow: hidden;
  width: 400px;
  height: 82px;
  margin-top: 10px;
  display: inline-flex;
  li {
    position: relative;
    padding: 2px;
    width: 64px;
    height: 64px;
    border: 2px solid #000;
    margin-left: 10px;
    cursor: pointer;
    &:first-child {
      margin-left: 10px;
    }
  }
  &.current {
    border-color: #ff6a00;
  }
}
.cl-magnifier--bigger {
  position: absolute;
  overflow: hidden;
  left: 410px;
  width: 400px;
  height: 400px;
  img {
    @include zero;
    width: 200%;
    height: 200%;
  }
}
.cl-magnifier--mask {
  @include zero;
  width: 200px;
  height: 200px;
  background: url("http://www.17sucai.com/preview/905244/2019-06-20/%E6%B7%98%E5%AE%9D%E4%B8%BB%E5%9B%BE/images/mask-bg.png")
    repeat;
  cursor: crosshair;
}
</style>