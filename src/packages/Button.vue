<template>
  <button class="young-button" :class="btnClass" @click="$emit('click', $event)">
    <young-icon class="icon" icon="loading" v-if="loading"></young-icon>
    <young-icon class="icon" :icon="icon" v-if="icon && !loading"></young-icon>
    <!-- $slots.default：获取插槽默认值 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
const typeList = ['default', 'primary', 'info', 'warning', 'success', 'danger'];
const iconPosition = ['left', 'right'];
const name = 'young-button';
export default {
  name: "young-button",
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        if(type && !typeList.includes(type)) {
          console.error(`${name}组件type属性必须包含${typeList.join('、')}`);
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(type) {
        if(type && !['left', 'right'].includes(type)) {
          console.error(`${name}组件iconPosition属性必须包含${iconPosition.join('、')}`);
        }
        return true;
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    btnClass() {
      let classes = [];
      if(this.type) {
        classes.push(`young-button-${this.type}`);
      }
      if(this.iconPosition) {
        classes.push(`young-button-${this.iconPosition}`);
      }
      return classes;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/common.scss";
$height:42px;
$font-size:16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.young-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: 42px;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover{
      border-color:$border-color;
      background:$background;
  }
   &:focus,
   &:active{
       color:$active-color;
       border:1px solid $active-color;
       background-color:$background;
       outline:none
   }
   @each $type,$color in(
       primary:$primary,
       success:$success,
       info:$info,
       warning:$warning,
       danger:$danger
   ){
       &-#{$type}{
           background:#{$color};
           border:1px solid #{$color};
           color:#fff;
           fill:#fff
       }
   }
    @each $type,$color in(
       primary:$primary-hover,
       success:$success-hover,
       info:$info-hover,
       warning:$warning-hover,
       danger:$danger-hover
   ){
       &-#{$type}:hover{
           background:#{$color};
           border:1px solid #{$color};
           color:#fff;
           fill:#fff
       }
   }
    @each $type,$color in(
       primary:$primary-active,
       success:$success-active,
       info:$info-active,
       warning:$warning-active,
       danger:$danger-active
   ){
       &-#{$type}:active,
       &-#{$type}:focus{
           background:#{$color};
           border:1px solid #{$color};
           color:#fff;
           fill:#fff
       }
   }
   .icon{
       width: 16px;
       height:16px;
       vertical-align: middle;
   }
   .icon + span{
       margin: 0 4px
   }
   &-left{
       svg{
           order:1
       }
       span{
           order:2
       }
   }
   &-right{
       svg{
           order:2
       }
       span{
           order:1
       }
   }
}
</style>