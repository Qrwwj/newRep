<template>
  <div class="shoppingPage" id="shoppingPage">
    <div class="img_box"></div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  //父子组件传值
  props: {},
  //监听
  watch: {},
  //计算属性
  computed: {},
})
export default class shoppingPage extends Vue {
  name = "ddd";
  num = "123";
  status = true;
  btn() {
    this.butClick(() => {
      console.log(1);
    }, 1000);
  }
  butClick(fn: any, time: number) {
    if (this.status) {
      this.status = false;
      fn();
      setTimeout(() => {
        this.status = true;
      }, time);
    }
  }
}
</script>
<style scoped>
.img_box {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  background: url(http://img.smyhvae.com/20191006_1330.jpg) no-repeat;
  margin-right: 20px;
  background-position: center;
  background-size: cover;
}
.s_box {
  width: 0;
  height: 0;
  margin: 20px auto;
  border: 40px solid transparent;
  border-bottom-color: tomato;
  border-top-color: antiquewhite;
}
.test {
  width: 80px;
  height: 80px;
  border: red 40px solid;
  border-top-color: antiquewhite;
}
.nav {
  width: 800px;
  text-align: center;
  padding-top: 50px;
  margin: 0 auto;
}

/*设置按钮基本样式*/
.nav a {
  display: inline-block;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  border: 1px solid #e59500;
  background-color: #ffb700;
  background-image: linear-gradient(to bottom, #ffb700 0%, #ff8c00 100%);
}
</style>
