<template lang="pug">
div
	h1 {{ data.msg }}
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "home",
  setup() {
    const data = reactive({
      msg: "11111"
    });
    return { data };
  }
});
</script>
