<template>
    <div class="demo">
        <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
        <h3>基础用法</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <cl-carousel>
                    <cl-carousel-item autoplay v-for="(item,index) in 4" :key="item" :name="index">
                        <div class="box">{{item}}</div>
                    </cl-carousel-item>
                </cl-carousel>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{baseMethods}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(0)">
                <cl-icon class="icon-down" :name="isShow[0]=== false ? 'arrocl-down' : 'arrocl-up'"></cl-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
        <Attributes></Attributes>
    </div>
</template>

<script>
import ClIcon from "@/icon/icon";
import mixin from "../mixin";
import ClCarousel from "@/carousel/carousel";
import ClCarouselItem from "@/carousel/carousel-item";
import Attributes from "./carousel-attributes.vue";
export default {
  name: "carousel-demo",
  mixins: [mixin],
  components: {
    ClIcon,
    ClCarousel,
    ClCarouselItem,
    Attributes
  },
  data() {
    return {
      selected: "1",
      codeStr: `
<cl-carousel>
    <cl-carousel-item auto-play v-for="(item,index) in 4" :key="item" :name="index">
        <div class="box">{{item}}</div>
    </cl-carousel-item>
</cl-carousel>
        `
    };
  },
  computed: {
    baseMethods() {
      return this.codeStr.replace(/^ {20}$/gm, "").trim();
    }
  }
};
</script>

<style lang="scss" scoped>

.box {
  height: 300px;
  background: #1890ff;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>