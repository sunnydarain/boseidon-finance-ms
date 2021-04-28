<template lang="pug">
.component-container
  .component-row-1
    .row-item-1
      el-button(v-for="(btn,index) in data.btnLeftArray",type="primary",size="small",:key="index",:disabled="btn.status") {{btn.name}}
      el-button.more(size="small") 
        span 更多
        i.el-icon-arrow-down.el-icon--right
    .row-item-2
      el-button(size="medium",type="text") 快捷键
      el-button(v-for="(btn,index) in data.btnRightArray",size="small",:key="index",:icon="btn.icon",:disabled="btn.status") 
  .component-row-1
    .row-item-1
    .row-item-2
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
    interface btnLeftStatus {
      name: string;
      status: boolean;
      eventName: string;
    }
    interface btnRightStatus {
      icon: string;
      status: boolean;
      eventName: string;
    }
    const btnLeftArray: btnLeftStatus[] = [
      {
        name: "保存并新增",
        status: true,
        eventName: ""
      },
      {
        name: "保存",
        status: true,
        eventName: ""
      },
      {
        name: "打印",
        status: true,
        eventName: ""
      }
    ];
    const btnRightArray: btnRightStatus[] = [
      {
        icon: "el-icon-arrow-left",
        status: false,
        eventName: ""
      },
      {
        icon: "el-icon-arrow-right",
        status: true,
        eventName: ""
      }
    ];
    const data = reactive({ btnLeftArray, btnRightArray });
    return { data };
  },
  methods: {}
});
</script>

<style lang="stylus" scoped>
.component-container
    width 1000px
    height auto
    display flex
    flex-direction column
    align-items center
    background #fff
    border-radius 8px
    padding 16px
    box-sizing border-box
    .component-row-1
      width 100%
      height 30px
      display flex
      flex-direction space-between
      .row-item-1
        flex 1
        display flex
        flex-direction row
        justify-content flex-start
        // .more:hover

      .row-item-2
        flex 1
        display flex
        flex-direction row
        justify-content flex-end
</style>
