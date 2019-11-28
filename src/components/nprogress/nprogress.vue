<template>
    <transition name="nnprogress">
        <div class="cl-loading" v-show="visible" :style="elStyle">
            <div class="nprogress" ref="nprogress" :style="proStyle"></div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'cl-nprogress',
        props: {
            background: { type: String, default: '#fff' },
            color: { type: String, default: '#36b1bf' },
            failedColor: { type: String, default: '#f5222d' },
            height: { type: Number, default: 3 },
        },
        data() {
            return {
                visible: true,
                timer: null
            }
        },
        computed: {
            elStyle() {
                return { background: this.background, height: `${this.height}px` }
            },
            proStyle() {
                return { background: this.color, height: `${this.height}px` }
            }
        },
        mounted() {
            this.$refs.nprogress.getBoundingClientRect()
            this.$nextTick(() => {
                this.start()
            })
        },
        methods: {
            start() {
                this.$refs.nprogress.style.transform = 'translateX(-10%)'
            },
            finish() {
                this.$nextTick(() => {
                    this.$refs.nprogress.style.transition = 'transform .2s linear'
                    this.$refs.nprogress.style.transform = 'translateX(0)'
                    this.$refs.nprogress.addEventListener('transitionend', this.closeEle)
                })
            },
            error() {
                this.$nextTick(() => {
                    this.$refs.nprogress.style.background = this.failedColor
                    this.$refs.nprogress.style.transition = 'transform .2s linear'
                    this.$refs.nprogress.style.transform = 'translateX(0)'
                    this.$refs.nprogress.addEventListener('transitionend', this.closeEle)
                })
            },
            closeEle() {
                this.timer = setTimeout(() => {
                    this.$el.addEventListener('transitionend', this.destroyEle)
                    this.visible = false
                }, 1000)
                this.$refs.nprogress.removeEventListener('transitionend', this.closeEle)
            },
            destroyEle() {
                this.$el && this.$el.removeEventListener('transitionend', this.destroyEle)
                this.$destroy()
            }
        },
        beforeDestroy() {
            this.timer ? window.clearTimeout(this.timer) : ''
            this.$refs.nprogress && this.$refs.nprogress.removeEventListener('transitionend', this.closeEle)
            this.$el && this.$el.removeEventListener('transitionend', this.destroyEle)
            this.$el && this.$el.remove()
        }
    }
</script>
<style scoped lang="scss">
    @import '../../basic/color.scss';
    .cl-loading {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
        width: 100%;
        overflow: hidden;
        >.nprogress {
            width: 100%;
            border-radius: 1px;
            transform: translateX(-100%);
            transition: transform 7s linear;
        }
    }
    .loading-fade-leave-active {
        transition: opacity 1s linear;
    }
    .loading-fade-leave-to {
        opacity: 0;
    }
</style>