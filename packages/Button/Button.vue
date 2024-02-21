<template>
  <button
    class="hz-button"
    :class="[
      `hz-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleEvent"
  >
    <div class="mask" v-if="disabled"></div>
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "HzButton",
  props: {
    type: {
      type: String,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
  },
  methods: {
    handleEvent(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss" scoped>
$normal-color: #fff;
$normal-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #67c23a;
$success-active-color: #85ce61;
$warning-color: #e6a23c;
$warning-active-color: #ebb563;
$danger-color: #f56c6c;
$danger-active-color: #f78989;

// 默认
.hz-button {
  display: inline-block;
  position: relative;
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
  line-height: 1;
  cursor: pointer;
  background-color: $normal-color;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  color: #606266;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  // 禁止文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 12px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: $normal-active-color;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

// 按钮类型
.hz-button--primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $normal-active-color;
    background-color: $normal-active-color;
    color: #fff;
  }
}
.hz-button--success {
  color: #fff;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}

.hz-button--info {
  color: #fff;
  background-color: $info-color;
  border-color: $info-color;
  &:hover,
  &:focus {
    background: $info-active-color;
    background-color: $info-active-color;
    color: #fff;
  }
}
.hz-button--warning {
  color: #fff;
  background-color: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    background-color: $warning-active-color;
    color: #fff;
  }
}
.hz-button--danger {
  color: #fff;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}

// 朴素按钮

.hz-button.is-plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.hz-button--primary.is-plain {
  box-shadow: unset;
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.hz-button--success.is-plain {
  box-shadow: unset;
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.hz-button--info.is-plain {
  box-shadow: unset;
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.hz-button--warning.is-plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.hz-button--danger.is-plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// round
.hz-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.hz-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// 禁用
.hz-button.is-disabled,
.hz-button.is-disabled:focus,
.hz-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.hz-button--primary.is-disabled,
.hz-button--primary.is-disabled:active,
.hz-button--primary.is-disabled:focus,
.hz-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.hz-button--success.is-disabled,
.hz-button--success.is-disabled:active,
.hz-button--success.is-disabled:focus,
.hz-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.hz-button--info.is-disabled,
.hz-button--info.is-disabled:active,
.hz-button--info.is-disabled:focus,
.hz-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

.hz-button--warning.is-disabled,
.hz-button--warning.is-disabled:active,
.hz-button--warning.is-disabled:focus,
.hz-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.hz-button--danger.is-disabled,
.hz-button--danger.is-disabled:active,
.hz-button--danger.is-disabled:focus,
.hz-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.hz-button.is-disabled.is-plain,
.hz-button.is-disabled.is-plain:focus,
.hz-button.is-disabled.is-plain:hover {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}
.hz-button--primary.is-plain.is-disabled,
.hz-button--primary.is-plain.is-disabled:active,
.hz-button--primary.is-plain.is-disabled:focus,
.hz-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.hz-button--success.is-plain.is-disabled,
.hz-button--success.is-plain.is-disabled:active,
.hz-button--success.is-plain.is-disabled:focus,
.hz-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.hz-button--info.is-plain.is-disabled,
.hz-button--info.is-plain.is-disabled:active,
.hz-button--info.is-plain.is-disabled:focus,
.hz-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.hz-button--warning.is-plain.is-disabled,
.hz-button--warning.is-plain.is-disabled:active,
.hz-button--warning.is-plain.is-disabled:focus,
.hz-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.hz-button--danger.is-plain.is-disabled,
.hz-button--danger.is-plain.is-disabled:active,
.hz-button--danger.is-plain.is-disabled:focus,
.hz-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

// 图标
.hz-button [class*="icon-hz-"] + span {
  margin-left: 5px;
}
</style>
