<template>
    <div class="cl-affix-wrapper">
        <div class="cl-affix" ref="affix" :class="{affix}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cl-affix',
        props: {
            distance: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                affix: false,
                top: 0,
                handleScroll: null
            }
        },
        mounted() {
            let { top } = this.$refs.affix.getBoundingClientRect()
            this.top = top + window.scrollY
            this.handleScroll = this._handleScroll.bind(this)
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            _handleScroll() {
                if (window.scrollY > this.top - this.distance) {
                    let { width, height, left } = this.$refs.affix.getBoundingClientRect()
                    const affix = this.$refs.affix
                    this.$el.style.width = width + 'px'
                    this.$el.style.height = height + 'px'
                    affix.style.width = width + 'px'
                    affix.style.height = height + 'px'
                    affix.style.top = this.distance + 'px'
                    affix.style.left = left + 'px'
                    this.affix = true
                } else {
                    this.affix = false
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .cl-affix-wrapper {
        width: 100%;
        >.cl-affix {
            width: 100%;
            height: 100%;
            &.affix {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
            }
        }
    }
</style>