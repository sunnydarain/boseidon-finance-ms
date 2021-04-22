<template lang="pug">
//- 首页
.main-container
    .container
        .card-container
            Card
        .body-container
            //- add
            //- tab
    
</template>

<script lang="ts">
import { defineComponent, reactive, defineAsyncComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  components: {
    Card: defineAsyncComponent(() =>
      import("@/views/Main/Home/components/card.vue")
    )
  },
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
    display flex
    flex-direction row
    justify-content center
    padding-top 100px
    box-sizing border-box
    .container
        width 1000px
        height 600px
        border-radius 10px
        background #fff
        display flex
        flex-direction column
        .card-container
            width 100%
            height 160px
            padding 20px
            box-sizing border-box
        .body-container
            width 100%
            flex 1
            padding 0 20px 20px 20px
            box-sizing border-box
</style>
