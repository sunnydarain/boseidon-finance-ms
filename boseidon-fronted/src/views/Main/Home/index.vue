<template lang="pug">
//- 首页
.main-container
    .container
        .card-container
            Card
        .body-container
            .add-container
                Plus
            .tab-container
                Tabs
</template>

<script lang="ts">
import { defineComponent, reactive, defineAsyncComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  components: {
    Card: defineAsyncComponent(() =>
      import("@/views/Main/Home/components/card.vue")
    ),
    Plus: defineAsyncComponent(() =>
      import("@/views/Main/Home/components/plus.vue")
    ),
    Tabs: defineAsyncComponent(() =>
      import("@/views/Main/Home/components/tablist.vue")
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
    padding-top 0px
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
            display flex
            justify-content space-between
            align-items center
            .add-container
                flex 1
                height 100%
                margin-right 10px
            .tab-container
                flex 1
                height 100%
                margin-left 10px
</style>
