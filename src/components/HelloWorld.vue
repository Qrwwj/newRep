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
              default-active="2"
              class="el-menu-vertical-demo"
              router
              @open="handleOpen"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="/index_page">item one</el-menu-item>
                  <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="/ shoppingPage">
                <el-icon>
                  <icon-menu />
                </el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon>
                  <document />
                </el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon>
                  <setting />
                </el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
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

  created() {
    const route = this.$route;
    console.log("route", route);
    const { meta, path } = route;
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
