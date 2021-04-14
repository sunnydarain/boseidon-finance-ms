<template lang="pug">
div
	h1(@click="btn(msg)") {{msg}}
</template>

<script lang="ts">
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String
    }
  },
  methods: {
    btn(val: any) {
      console.log(val);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
