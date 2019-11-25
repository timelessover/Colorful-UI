<template>
  <div class="cl-col" :class="classObject" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach((key) => {
    if (!(['span', 'offset'].indexOf(key) >= 0)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'cl-col',
  props: {
    span: {
      type: [Number,String]
    },
    offset: {
      type: [Number, String]
    },
    xs: {
      type: [Number,Object],
      validator
    },
    sm: {
      type: [Number,Object],
      validator
    },
    md: {
      type: [Number,Object],
      validator
    },
    lg: {
      type: [Number,Object],
      validator
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    classObject() {
      let { span, offset, lg, md, sm, xs } = this
      let createClasses = this.createClasses
      let classArr = []
      if(span || offset){
        classArr.push(...createClasses({span, offset}))
      }
      return [
        ...classArr,
        ...createClasses(xs, 'xs-'),
        ...createClasses(sm	, 'sm-'),
        ...createClasses(md, 'md-'),
        ...createClasses(lg, 'lg-'),
      ]
    },
    colStyle() {
      let { gutter } = this
      return {paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}
    }
  },
  methods: {
    createClasses(obj, str = '') {
      if(!obj) return []
      if(toString.call(obj) === '[object Number]') return [`cl-col-${str}${obj}`]
      let arr = []
      if(obj.span){
        arr.push(`cl-col-${str}${obj.span}`)
      }
      if(obj.offset){
        arr.push(`cl-offset-${str}${obj.offset}`)
      }
      return arr
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/common/base.scss";
  .cl-col {
    $class-prefix: cl-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24 ) * 100%;
      }
    }
    $class-prefix: cl-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24 ) * 100%;
      }
    }
    @media (min-width: 0px){    
      $class-prefix: cl-col-xs-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24 ) * 100%;
        }
      }
      $class-prefix: cl-offset-xs-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24 ) * 100%;
        }
      }
    }
    @media (min-width: 577px){    
      $class-prefix: cl-col-sm-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24 ) * 100%;
        }
      }
      $class-prefix: cl-offset-sm-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24 ) * 100%;
        }
      }
    }
    @media (min-width: 769px) {    
      $class-prefix: cl-col-md-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24 ) * 100%;
        }
      }
      $class-prefix: cl-offset-md-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24 ) * 100%;
        }
      }
    }
    @media (min-width: 993px) {    
      $class-prefix: cl-col-lg-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24 ) * 100%;
        }
      }
      $class-prefix: cl-offset-xl-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24 ) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {    
      $class-prefix: cl-col-xl-;
      @for $n from 1 through 24 {l
        &.#{$class-prefix}#{$n} {
          width: ($n / 24 ) * 100%;
        }
      }
      $class-prefix: cl-offset-lg-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24 ) * 100%;
        }
      }
    }
  }
</style>
