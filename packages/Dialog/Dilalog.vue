<template>
  <Transition name="dialog-fade">
    <div class="hz-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="hz-dialog" :style="{ width, marginTop: top }">
        <div class="hz-dialog_header">
          <slot name="title">
            <span class="hz-dialog_title">{{ title }}</span>
          </slot>
          <button class="hz-dialog_headerbtn">
            <i class="icon-hz-cancel" @click.self="handleClose"></i>
          </button>
        </div>
        <div class="hz-dialog_body">
          <slot></slot>
        </div>
        <div class="hz-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
          <!-- <hz-button>取消</hz-button> -->
          <!-- <hz-button type="primary">确认</hz-button> -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "HzDialog",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "30%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
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
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="scss" scoped>
.hz-dialog_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .hz-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .hz-dialog_title {
        line-height: 24px;
        font-size: 16px;
        color: #303133;
      }
      .hz-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 14px;
        .icon-hz-cancel {
          color: #909399;
          font-size: 16px;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 12px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .hz-button:first-child {
        margin-right: 12px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.5s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
