<template lang="pug">
.component-container
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({});
    return { data };
  },
  methods: {}
});
</script>

<style lang="stylus" scoped>
.component-container
    width 100%
    height 100%
    box-sizing border-box
    display flex
    flex-direction row
    border 1px solid #e5e5e5
    border-radius 8px
</style>
