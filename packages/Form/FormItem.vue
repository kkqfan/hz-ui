<template>
  <div class="hz-form-item">
    <label :style="labelStyle" class="hz-form-item_label">{{ label }}</label>
    <div class="hz-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HzFormItem",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  inject: ["Form"],
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth,
      };
    },
  },
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
.hz-form-item {
  margin-bottom: 25px;
  .hz-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .hz-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
//@import url(); 引入公共css类
</style>
