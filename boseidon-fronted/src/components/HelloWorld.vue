<template lang="pug">
div
	h1(@click="msgBtn(msg)") {{msg}}
</template>

<script lang="ts">
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    msgBtn(val: any) {
      console.log("点击事件", val);
    }
  }
};
</script>

<style lang="stylues" scoped></style>
