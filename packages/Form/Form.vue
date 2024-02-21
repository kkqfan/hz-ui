<template>
  <div class="hz-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HzForm",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  provide() {
    return {
      Form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    labelWidth: {
      type: String,
      default: "80px",
    },
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
