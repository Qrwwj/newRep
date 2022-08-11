<template>
  <div class="common-layout">
    <el-container>
      <el-header class="headerSty">
        <div class="headerBox"></div>
      </el-header>
      <div class="main_body">
        <el-container>
          <el-aside width="200px">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-vertical-demo"
              v-for="item in routerLists"
              :key="item.path"
              router
              @open="handleOpen"
              @close="handleClose"
            >
              <!-- 有二级菜单 -->
              <div v-if="item.children && item.children.length !== 0">
                <el-sub-menu :index="item.path">
                  <template #title>
                    <el-icon>
                      <location />
                    </el-icon>
                    <span>{{ item.title }}</span>
                  </template>
                  <!-- 判断是否有三级菜单 -->
                  <div v-for="itemSon in item.children" :key="itemSon.path">
                    <div
                      v-if="itemSon.children && itemSon.children.length !== 0"
                    >
                      <el-sub-menu :index="itemSon.path">
                        <template #title>{{ itemSon.title }}</template>
                        <el-menu-item
                          :index="itemGroundSon.path"
                          v-for="itemGroundSon in itemSon.children"
                          :key="itemGroundSon.path"
                          >{{ itemGroundSon.title }}</el-menu-item
                        >
                      </el-sub-menu>
                    </div>
                    <div v-else>
                      <el-menu-item :index="itemSon.path">{{
                        itemSon.title
                      }}</el-menu-item>
                    </div>
                  </div>
                </el-sub-menu>
              </div>
              <!-- 没有二级菜单 -->
              <div v-else>
                <el-menu-item :index="item.path">
                  <el-icon><icon-menu /></el-icon>
                  <span>{{ item.title }}</span>
                </el-menu-item>
              </div>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </div>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { routeList } from "@/router/modules/routeList";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";

@Options({
  components: {
    Location,
    Document,
    IconMenu,
    Setting,
  },
  // props: {}
})
export default class HelloWorld extends Vue {
  routerData: object = {};
  routerLists: Array<any> = [];
  activeIndex = "";

  created() {
    console.log("routeList", routeList);
    this.routerLists = routeList;
    const route = this.$route;
    console.log("route", route);
    const { meta, path } = route;
    this.activeIndex = path;
    // this.routerData = this.$route.matched[0].children;
    console.log("meta", meta);
    console.log("path", path);
  }
  handleOpen() {
    console.log("1");
  }

  handleClose() {
    console.log("2");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.common-layout {
  height: 100%;
}
.headerBox {
  height: 58px;
}
.headerSty {
  border-bottom: #ccc 1px solid;
}
.main_body {
  height: calc(100% - 58px);
}
</style>
