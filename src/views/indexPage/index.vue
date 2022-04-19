<template>
  <div class="index" id="index">
    <div style="display: flex">
      <div class="container_index">
        <span :data-before="count_befor" :data-after="count_after">{{
          count_1
        }}</span>
      </div>
      <div class="container_index">
        <span :data-before="count_befor" :data-after="count_after">{{
          count_2
        }}</span>
      </div>
      <div class="container_index">
        <span :data-before="count_befor" :data-after="count_after">{{
          count_3
        }}</span>
      </div>
    </div>
    <table
      width="100%"
      border="1"
      align="center"
      cellpadding="4"
      cellspacing="0"
    >
      <thead>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td colspan="2">2</td>
          <td rowspan="3">4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <td>123</td>
          <td>33</td>
          <td>33</td>
          <td>33</td>
        </tr>
      </tbody>
    </table>
    <div class="progress-1"></div>
    <formCo></formCo>
  </div>
</template>
<script lang="ts">
import formCo from "../../components/component.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  //父子组件传值
  props: {},
  //监听
  watch: {},
  //计算属性
  computed: {},
  components: {
    formCo,
  },
})
export default class index extends Vue {
  num = "0123456789";
  numList = [
    { id: 0, val: 0 },
    { id: 1, val: 1 },
    { id: 2, val: 2 },
    { id: 3, val: 3 },
    { id: 4, val: 4 },
    { id: 5, val: 5 },
    { id: 6, val: 6 },
    { id: 7, val: 7 },
    { id: 8, val: 8 },
    { id: 9, val: 9 },
  ];
  count_1 = 0;
  count_2 = 0;
  count_3 = 0;
  count_befor = 9;
  count_after = 1;

  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    const dom = document.getElementsByTagName("span")[0];
    // setInterval(function () {
    //   if (that.count_3 >= 9) {
    //     that.count_3 = 0;
    //     that.count_2 += 1;
    //   }
    //   that.count_3 = that.count_3 + 1;
    //   that.count_befor = that.count_3 - 1;
    //   if (that.count_3 + 1 === 10) {
    //     that.count_after = 0;
    //   } else {
    //     that.count_after = that.count_1 + 1;
    //   }
    //
    //   dom.innerText = that.count_3.toString();
    //   dom.setAttribute("data-before", that.count_befor.toString());
    //   dom.setAttribute("data-after", that.count_after.toString());
    //   dom.classList.remove("before");
    // }, 300); //这里时间跟动画时间一样
  }
}
</script>
<style scoped>
.ul_sty {
  list-style-type: none;
  border: red 1px solid;
  width: 10px;
  padding: 0 5px;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  position: relative;
}

.container_index {
  width: 1rem;
  height: 1rem;
  background-color: #000000;
  border-radius: 0.2rem;
  display: flex;
  overflow: hidden;
  padding: 0.4rem 0;
  color: #ffffff;
}

.container_index span {
  flex: 0 1 5rem;
  color: white;
  font-weight: bold;
  line-height: 1rem;
  text-align: center;
  transform: translateY(-1rem);
}

.container_index span::before {
  content: attr(data-before);
  display: block;
  color: rgba(143, 140, 140, 0.26);
}

.container_index span::after {
  content: attr(data-after);
  display: block;
  color: rgba(143, 140, 140, 0.26);
}

.container_index span.before {
  transform: translateY(0rem);
  transition: 0.3s ease-in;
}

.container_index span.after {
  transform: translateY(-2rem);
  transition: 0.3s ease-in;
}

.progress-1 {
  width: 120px;
  height: 20px;
  background: linear-gradient(#000 0 0) 0/0% no-repeat #ddd;
  animation: p1 2s infinite linear;
}
@keyframes p1 {
  100% {
    background-size: 100%;
  }
}
</style>
