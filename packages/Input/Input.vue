<template>
  <div
    class="hz-input"
    :style="{ width }"
    :class="{ 'hz-input_suffix': showSuffix }"
  >
    <input
      class="hz-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="hz-input_suffix" v-if="showSuffix">
      <i
        class="icon-hz-cancel"
        v-if="clearable && value"
        @click="handleClear"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "HzInput",
  components: {},
  props: {
    width: {
      type: String,
      default: "200px",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    type: {
      validator: function (value) {
        return ["text", "password", "number"].includes(value);
      },
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String | Number,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleClear(e) {
      this.$emit("input", "");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
};
</script>
<style lang="scss" scoped>
.hz-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hz-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.hz-input_suffix {
  .hz-input_inner {
    padding-right: 30px;
  }
  .hz-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
