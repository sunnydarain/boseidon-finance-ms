<template lang="pug">
.component-container
    .plus-button-container(@click="addProof")
        i.el-icon-plus
    span.plus-text 新增凭证
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({});
    return { data };
  },
  methods: {
    // 新增凭证
    addProof() {
      alert("新增凭证");
    }
  }
});
</script>

<style lang="stylus" scoped>
.component-container
    width 100%
    height 100%
    box-sizing border-box
    display flex
    flex-direction column
    justify-content center
    align-items center
    border 1px solid #e5e5e5
    border-radius 8px
    .plus-button-container
        width 100px
        height 100px
        border 1px solid #20C89F
        border-radius 8px
        display flex
        flex-direction row
        justify-content center
        align-items center
        font-size 50px
        font-weight bold
        color #20C89F
        cursor pointer
        &:hover
            background rgba(32,200,159,0.2)
    .plus-text
        font-size 16px
        margin-top 10px
        font-weight bold
</style>
