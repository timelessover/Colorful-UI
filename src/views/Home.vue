<template>
  <div id="home">
    <ClButton @click="handleClick">确定</ClButton>
    
  </div>
</template>
<script>
import ClButton from "@/components/button/button";
import ClToast from "@/components/toast/toast";
import { setTimeout } from 'timers';



export default {
  components: {
    ClButton,
    ClToast
  },
  data() {
    return {
      flag: true,
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab) {
      this.$toast({
        message:'xxx',
        center:true
      })
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cl-dropdown-link {
  height: 50px;
  width: 100px;
  background: blue;
}
#home {
  height: 200vh;
}
.cl-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.cl-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>