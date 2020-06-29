<!-- 广播接受都子/孙组件 -->
<template>
  <div>
    <h1>我接收的信息是: {{ msg }} {{ msg2 }}</h1>
  </div>
</template>

<script>
export default {
  name: "Broadcast",
  data() {
    return {
      msg: "",
      msg2: ""
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.$on("broadcast-msg", (msg, msg2) => {
      this.msg = msg;
      this.msg2 = msg2;
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style style lang="less" scoped>
/* @import url(); 引入css类 */
</style>
