<template lang="pug">
//- 凭证
.main-container
    router-view
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "ProofPage",
  setup() {
    const data = reactive({});
    return { data };
  }
});
</script>

<style lang="stylus" scoped>
.main-container
    width 100%
    height 100%
</style>
