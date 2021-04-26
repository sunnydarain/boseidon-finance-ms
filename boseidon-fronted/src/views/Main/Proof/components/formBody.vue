<template lang="pug">
.component-container
  span {{title}}
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "formHeader",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    const data = reactive({});
    return { data };
  }
});
</script>

<style lang="stylus" scoped>
.component-container
    width 1000px
    height 526px
    display flex
    flex-direction row
    justify-content center
    align-items center
    background #fff
    border-radius 8px
</style>
