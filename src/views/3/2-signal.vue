<!-- 派发与广播 -->
<template>
  <div>
    <button @click="handleEmitEvent">触发自定义自定义事件</button> |
    <button @click="handlebroadcast">触发子/孙组件方法</button> |
    <button @click="handleDispatch">广播父/爷组件方法</button>
    <br />
    <Broadcast />
  </div>
</template>

<script>
import emitter from "./emitter.js";
import Broadcast from "@/components/Broadcast";
export default {
  name: "Signal2",
  mixins: [emitter],
  data() {
    return {
      msg: "派发与广播"
    };
  },
  components: {
    Broadcast
  },
  methods: {
    handleEmitEvent() {
      this.$emit("test", "hello vue.js", "6666");
    },
    handlebroadcast() {
      this.broadcast("Broadcast", "broadcast-msg", 666666, 11111);
    },
    handleDispatch() {
      this.dispatch("app", "dispatch-msg", "我是子组件-dispatch");
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$on("test", (msg, b) => alert(msg + b));
  }
};
</script>
<style style lang="less" scoped>
/* @import url(); 引入css类 */
</style>
