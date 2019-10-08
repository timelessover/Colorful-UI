export const Wave = {
    name: "cl-wave-animation-animating",
    data() {
        return {
            node: null,
            animating: false,
            originClassName: ''
        };
    },
    mounted() {
        this.node = this.$el
        this.originClassName = this.node.className
        this.node.addEventListener("click", this.animationStart);
    },

    beforeDestroy() {
        this.node.removeEventListener("click", this.animationStart);
        this.node.removeEventListener("animationend", this.animationEnd);
    },
    methods: {
        animationStart() {
            const activeName = " cl-wave-animation-animating"
            if (this.animating || this.closeWave) {
                return;
            }
            this.animating = true;
            this.originClassName = this.node.className;
            this.node.className = [this.originClassName + activeName];
            this.node.addEventListener("animationend", this.animationEnd);
        },
        animationEnd() {
            this.animating = false;
            this.node.className = this.originClassName;
            this.node.removeEventListener("animationend", this.animationEnd);
        }
    }
};
