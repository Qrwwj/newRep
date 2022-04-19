<template>
  <div class="component" id="component">测试组件</div>
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
export default class Component extends Vue {
  data() {
    return {};
  }
  created() {
    console.log(1);
  }
  mounted() {
    console.log(0);
  }
}
</script>
<style></style>
