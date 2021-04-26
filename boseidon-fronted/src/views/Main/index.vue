<template lang="pug">
//- 主页-导航页面
.container
  //- 左侧导航
  .first-container
    el-row.logo(type="flex",justify="center",align="middle") 测试LOGO
    el-row
      el-col(:span="24")
        el-menu(:router="true",:default-active="route.meta.pathCurrent",@open="handleOpen",@close="handleClose",background-color="#545c64",text-color="#fff",active-text-color="#ffd04b")
          template(v-for="(s,index) in menuArray" :key="index")
            template(v-if="s.children.length > 0")
              el-submenu(:index="s.index")
                template(#title)
                  i.el-icon-location
                  span(v-text="s.name")
                el-menu-item-group
                  el-menu-item(v-for="m in s.children",:index="m.url",@click="changeDefaultRoute(String(m.url))") {{m.name}}
            template(v-else)
              el-menu-item(:index="s.index")
                i.el-icon-location
                span(slot="title",v-text="s.name") 
  //- 右侧内容
  .second-container
    .header-container
      .item 
        .headerImgs(@click="showTools")
          .fontitle 常用工具
          template(v-if="data.isToolShow")
            el-button(type="text",icon="el-icon-arrow-up")
          template(v-else)
            el-button(type="text",icon="el-icon-arrow-down")
      .item
        el-tooltip(content="消息中心",placement="top")
          i.iconfont.iconbell(style="color:#ccc;font-size:20px")
      template(v-if="data.isPersonShow")
        .headerImgs(@click="showPersonal")
          img.head-img(src="../../assets/common/testHead.jpg")
          el-button(type="text",icon="el-icon-arrow-up")
      template(v-else)
        el-tooltip(content="个人中心",placement="top")
          .headerImgs(@click="showPersonal")
            img.head-img(src="../../assets/common/testHead.jpg")
            el-button(type="text",icon="el-icon-arrow-down")
    //- 页面
    .view-container
      router-view
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

interface menuItem {
  name: string;
  url: string;
  children: childrenItem[];
  index: string;
}
interface childrenItem {
  name: string;
  url: string;
}

const menuArray: menuItem[] = [
  { name: "首页", url: "/main/home", children: [], index: "/main/home" },
  {
    name: "凭证",
    url: "/main/proof",
    index: "/main/proof",
    children: [
      {
        name: "新增凭证",
        url: "/main/proof/newProof"
      },
      {
        name: "查看凭证",
        url: ""
      },
      {
        name: "会计电子档案",
        url: ""
      }
    ]
  },
  { name: "资金", url: "03", children: [], index: "3" },
  { name: "发票", url: "04", children: [], index: "4" },
  { name: "工资", url: "05", children: [], index: "5" },
  { name: "期末结转", url: "06", children: [], index: "6" },
  { name: "账簿", url: "07", children: [], index: "7" },
  { name: "报表", url: "08", children: [], index: "8" },
  { name: "一键报税", url: "09", children: [], index: "9" },
  { name: "设置", url: "10", children: [], index: "10" },
  { name: "进销存", url: "11", children: [], index: "11" }
];

export default defineComponent({
  name: "MainPage",
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    menuArray;
    const data = reactive({
      isPersonShow: false,
      isToolShow: false,
      activerouter: "/main/home"
    });
    // 点击切换路由默认
    function changeDefaultRoute(path: string) {
      console.log(path, "222");
    }
    return { data, menuArray, changeDefaultRoute, route, router };
  },
  methods: {
    handleOpen(key: string, keyPath: string) {
      console.log(key, keyPath);
    },
    handleClose(key: string, keyPath: string) {
      console.log(key, keyPath);
    },
    // 个人设置
    showPersonal() {
      this.data.isPersonShow = !this.data.isPersonShow;
    },
    // 常用工具
    showTools() {
      this.data.isToolShow = !this.data.isToolShow;
    }
  }
});
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  min-width 1300px
  display flex
  flex-direction row
  overflow hidden
  .first-container
    width 200px
    height 100%
    background rgb(84, 92, 100)
    color #ffffff
    overflow-y auto
    /deep/ .el-menu
      border 0
    .logo
      width 100%
      height 50px
  .second-container
    flex 1
    height 100%
    display flex
    flex-direction column
    .header-container
      width 100%
      height 60px
      padding 5px 30px
      box-sizing border-box
      display flex
      flex-direction row
      justify-content flex-end
      align-items center
      .headerImgs
        display flex
        flex-direction row
        justify-content center
        align-items center
        cursor pointer
        .head-img
          width 40px
          height 40px
          border-radius 50%
        .fontitle
          font-size 14px
          font-weight bold
      .item
        margin-right 25px
        cursor pointer
    .view-container
      width 100%
      flex 1
      background #f2f2f2
      padding 20px
      box-sizing border-box
</style>
