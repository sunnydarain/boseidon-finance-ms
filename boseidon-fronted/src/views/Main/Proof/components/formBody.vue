<template lang="pug">
.component-container
  .component-row
    el-button(v-for="(btn,index) in data.btnArray",type="primary",size="small",:key="index",:disabled="btn.status") {{btn.name}}
    el-button(size="small") 
      span 更多
      i.el-icon-arrow-down.el-icon--right
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "formHeader",
  props: {
    form: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup() {
    interface btnStatus {
      name: string;
      status: boolean;
      eventName: string;
    }
    const btnArray: btnStatus[] = [
      {
        name: "保存并新增",
        status: false,
        eventName: ""
      },
      {
        name: "保存",
        status: false,
        eventName: ""
      },
      {
        name: "打印",
        status: false,
        eventName: ""
      }
    ];
    const data = reactive({ btnArray });
    return { data };
  },
  methods: {}
});
</script>

<style lang="stylus" scoped>
.component-container
    width 1000px
    max-height 526px
    display flex
    flex-direction column
    align-items center
    background #fff
    border-radius 8px
    padding 16px
    box-sizing border-box
    .component-row
      width 100%
      height 30px
</style>
