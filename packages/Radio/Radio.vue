<template>
  <label class="hz-radio" :class="{ 'is-checked': label == model }">
    <span class="hz-radio_input">
      <span class="hz-radio_inner"></span>
      <input
        type="radio"
        class="hz-radio_original"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="hz-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "HzRadio",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  data() {
    //这里存放数据
    return {};
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      defualt: "",
    },
    value: null,
    name: {
      type: String,
      defualt: "",
    },
  },
  //监听属性 类似于data概念
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件的input事件
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      return !!this.RadioGroup;
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
.hz-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .hz-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hz-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .hz-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hz-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.hz-radio.is-checked {
  .hz-radio_input {
    .hz-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .hz-radio_label {
    color: #409eff;
  }
}
</style>
