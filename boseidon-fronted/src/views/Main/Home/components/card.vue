<template lang="pug">
.component-container
    .card-container(v-for="(s,index) in cards",:key="index")
        .content(v-text="s.name",:class="{'content_1':(index === 0),'content_2':(index === 1),'content_3':(index === 2),'content_4':(index === 3)}")
        .bottom(:style="{background: s.bottomColor}")
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const cards = [
      {
        name: "查看凭证",
        bottomColor: "#20C89F"
      },
      {
        name: "科目余额表",
        bottomColor: "#FF9548"
      },
      {
        name: "资产负债表",
        bottomColor: "#F66562"
      },
      {
        name: "利润表",
        bottomColor: "#1298F9"
      }
    ];
    const data = reactive({});
    return { data, cards };
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
    &>.card-container:not(:first-child)
        margin-left 20px
    .card-container
        flex 1
        height 100%
        border 1px solid #e5e5e5
        border-bottom 0
        box-sizing border-box
        border-radius 8px
        display flex
        flex-direction column
        cursor pointer
        overflow hidden
        .content
            flex 1
            display flex
            justify-content center
            align-items center
            font-size 20px
            color #666
        .content_1:hover
            background rgba(32,200,159,0.4)
            color #fff
        .content_2:hover
            background rgba(255,149,72,0.4)
            color #fff
        .content_3:hover
            background rgba(246,101,98,0.4)
            color #fff
        .content_4:hover
            background rgba(18,152,249,0.4)
            color #fff
        .bottom
            height 10px
</style>
