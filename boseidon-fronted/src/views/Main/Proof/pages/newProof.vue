<template lang="pug">
.page-container
    .form-header
        FormHeader(:title="'记账凭证'")
    .form-content
        FormBody

</template>

<script lang="ts">
import { defineComponent, reactive, defineAsyncComponent } from "vue";
export default defineComponent({
  name: "ProofPage",
  components: {
    FormHeader: defineAsyncComponent(() =>
      import("@/views/Main/Proof/components/formHeader.vue")
    ),
    FormBody: defineAsyncComponent(() =>
      import("@/views/Main/Proof/components/formBody.vue")
    )
  },
  setup() {
    const data = reactive({});
    return { data };
  }
});
</script>

<style lang="stylus" scoped>
.page-container
    width 100%
    height 100%
    display flex
    flex-direction column
    .form-header
        width 100%
        height 50px
        font-size 24px
        font-weight bold
        flex-shrink 0
    .form-content
        width 100%
        flex 1
        flex-shrink 0
        overflow-y auto
        display flex
        flex-direction row
        justify-content center
        padding-top 20px
        box-sizing border-box
</style>
