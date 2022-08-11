import router from "./router";
// import store from "./store";
import { getToken } from "@/utils/auth"; // get token from cookie

const whiteList = ["/login", "/auth-redirect"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken();
  // const hasToken = this.$store.getters.getUser;
  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
    } else {
      console.log("aaaa", to.path);
      next();
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // next(`/login?redirect=${to.path}`);
      next({ path: "/login" });
    }
  }
});

// router.afterEach(() => {});
