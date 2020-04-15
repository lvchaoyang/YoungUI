<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import "../styles/icon.js";
export default {
  name: "young-icon",
  props: {
    icon: {
      type: String,
      required:true
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.young-icon{
  width: 25px;
  height:25px;
  vertical-align: middle;
  
}
</style>