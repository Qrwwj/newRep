<template>
  <div class="login">
    <div class="loginFrom">
      <div class="header">
        <img src="../../image/logo.png" alt="头像" class="header_img" />
      </div>
      <el-form :model="loginFrom" class="l_f">
        <el-form-item label="账号">
          <el-input v-model="loginFrom.userName" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginFrom.passWord" type="password" />
        </el-form-item>
        <el-button @click="loginTo">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { setToken } from "@/utils/auth"; // get token from cookie

@Options({
  components: {},
})
export default class Login extends Vue {
  loginFrom = {
    userName: "admin",
    passWord: "123456",
  };
  loginTo() {
    this.$store.dispatch("setMessage", this.loginFrom);
    console.log("data", this.$store.getters.getUser);
    setToken(this.loginFrom);
    this.$router.push({ path: "/homePage" });
  }
}
</script>
<style scoped>
.login {
  height: 100%;
  background: #cccccc;
}

.loginFrom {
  width: 320px;
  height: 300px;
  padding: 0 20px;
  border: #ccc 1px solid;
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header {
  width: 150px;
  height: 150px;
  line-height: 250px;
  text-align: center;
  border-radius: 50%;
  border: bisque 1px solid;
  box-shadow: darkgray;
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: bisque;
}
.header_img {
  width: 100px;
}
.l_f {
  margin-top: -30px;
  text-align: center;
}
</style>
