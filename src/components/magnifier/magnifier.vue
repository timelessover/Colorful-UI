<v-magnifier dirction>
    <v-magnifier-item>
</v-magnifier>
magnifier //bigger左右方向

<template>
    <div class="wrap" ref="wrap">
        <div class="biger" ref="biger" v-show="visable">
            <img :src="currentImg" alt="">
        </div>
        <div class="imgs">
            <div
                class="main"
                ref="main"
                @mouseenter="handleEnter"
                @mouseleave="handleOut"
                @mousemove="handleMove"
            >
                <img :src="currentImg" alt="">
                <div class="mask" ref="mask" v-show="visable"></div>
            </div>
            <ul class="smaller">
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
      },
  },
  data() {
    return {
      currentIndex: 0,
      visable: false
    };
  },
  mounted() {},
  computed: {
    currentImg() {
      return this.imgList[this.currentIndex].path;
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
        let biger = this.$refs.biger;
        let bigPic = biger.children[0];
        let pagex = e.pageX || scroll().left + e.clientX;
        let pagey = e.pageY || scroll().top + e.clientY;
        pagex = pagex - wrap.offsetLeft - mask.offsetWidth / 2;
        pagey = pagey - wrap.offsetTop - mask.offsetHeight / 2;
        if (pagex < 0) {
          pagex = 0;
        }
        if (pagey < 0) {
          pagey = 0;
        }
        if (pagex > main.offsetWidth - mask.offsetWidth) {
          pagex = main.offsetWidth - mask.offsetWidth;
        }
        if (pagey > main.offsetHeight - mask.offsetHeight) {
          pagey = main.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = pagex + "px";
        mask.style.top = pagey + "px";
        var scale =
          (bigPic.offsetWidth - biger.offsetWidth) /
          (main.offsetWidth - mask.offsetWidth);
        var xx = pagex * scale;
        var yy = pagey * scale;
        bigPic.style.left = -xx + "px";
        bigPic.style.top = -yy + "px";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
body,
ul {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.wrap {
  position: relative;
  top: 100px;
  left: 100px;
  width: 400px;
  height: 492px;
}
.imgs {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.main {
  position: relative;
  overflow: hidden;
  padding: 4px;
  width: 390px;
  height: 390px;
  border: 1px solid #dadada;
}
.smaller {
  position: relative;
  overflow: hidden;
  width: 400px;
  height: 82px;
  margin-top: 10px;
}
.smaller li {
  position: relative;
  float: left;
  padding: 2px;
  width: 64px;
  height: 64px;
  border: 2px solid #000;
  margin-left: 10px;
  cursor: pointer;
}
.smaller li:first-child {
  margin-left: 0;
}
.smaller .current {
  border-color: #ff6a00;
}
.biger {
  position: absolute;
  overflow: hidden;
  left: 410px;
  width: 400px;
  height: 400px;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  background: url("http://www.17sucai.com/preview/905244/2019-06-20/%E6%B7%98%E5%AE%9D%E4%B8%BB%E5%9B%BE/images/mask-bg.png")
    repeat;
  cursor: crosshair;
}
.biger img {
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
}
</style>