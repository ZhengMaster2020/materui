<template>
  <button
    class="ms-button"
    @click="handleClick"
    :type="nativeType"
    :disabled="buttonDisabled || loading"
    :class="[
      buttonColor ? 'ms-button-' + buttonColor + '-' + buttonShade: '',
      buttonShade ? 'md-button-' + buttonShade : '',
      buttonShape ? 'ms-button-' + buttonShape : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
      }
    ]"
  >
  <i class="ms-icon-loading" v-if="loading"></i>
  <i :class="icon" v-if="icon && !loading"></i>
  <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'MsButton',
  
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    size: String,
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    shade: {
      type: String,
      default: 'dark'
    },
    shape: {
      type: String,
      default: 'round'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type:Boolean,
      default: false
    }
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    buttonColor() {
      return this.color;
    },
    buttonShade() {
      return this.shade;
    },
    buttonShape() {
      return this.shape;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style>

/* 普通以及 默认按钮 */
.ms-button,.ms-button-normal{
  margin: 5px;
  padding: 10px 30px;
  text-align: center;
  color: #606266;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  background: #fff;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.21);
  border-bottom: 4px solid rgba(0,0,0,0.21);
  text-shadow: 0 1px 0 rgba(0,0,0,0.15);  
}

/* 按钮形状 */
.ms-button-round{
  border-radius: 10px;
}
.ms-button-circle{
  border-radius: 50%;
  padding: 12px;
}
.ms-button-text{
  color: #409EFF;
  background: #fff;
  border: none;
}
.ms-button-block{
  display: block;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

/* 按钮大小 */
.ms-button-mini{
  padding: 4px 12px;
  font-size: 12px;
}
.ms-button-small{
  padding: 8px 18px;
  font-size: 14px;
}
.ms-button-large{
  padding: 15px 45px;
  font-size: 22px;
}

/* 禁用按钮 */
.is-disabled:hover{
  cursor: not-allowed;
}

/* 加载中按钮 */
.is-loading{
  position: relative;
  pointer-events: none;
}
.el-button.is-loading:before {
  pointer-events: none;
  content: '';
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: rgba(255,255,255,.35);
}
.ms-icon-loading{
  animation: rotating 2s linear infinite;
}
.ms-icon-loading::before{
  content: "loading...";
}

/* 按钮背景颜色以及颜色深浅  */
.ms-button-red-dark, 
.ms-button-red-light:hover{
  color: #FFF;
  background: #fa5a5a;
}
.ms-button-red-dark:hover{
  opacity: 0.9;
}
.ms-button-red-light{
  color: #fa5a5a;
  background: #fadada;
}

.ms-button-orange-dark,
.ms-button-orange-light:hover{
  color: #FFF;
  background: rgba(255,105,30,1);
  background: linear-gradient(rgba(255,105,30,1) 0%, rgba(230,95,28,1) 100%);
}
.ms-button-orange-dark:hover{
  opacity: 0.9;
}
.ms-button-orange-light{
  color: rgba(255,105,30,1);
  background: rgb(248, 218, 202);
}

.ms-button-green-dark,
.ms-button-green-light:hover{
  color: #FFF;
  background:  rgba(130,200,160,1);
}
.ms-button-green-dark:hover{
  opacity: 0.9;
}
.ms-button-green-light{
  color: rgba(130,200,160,1);
  background: rgb(223, 250, 235);
}

.ms-button-gray-dark,
.ms-button-gray-light:hover{
  color: #FFF;
  background-color: #909399;
}
.ms-button-gray-dark:hover{
  opacity: 0.9;
}
.ms-button-gray-light{
  color: rgba(10, 10, 10, 0.15);
  background: rgba(141, 140, 140, 0.15); 
}

.ms-button-blue-dark,
.ms-button-blue-light:hover{
  color: #FFF;
  background: rgba(102,152,203,1);
}
.ms-button-blue-dark:hover{
  opacity: 0.9;
}
.ms-button-blue-light{
  color: rgb(67, 145, 223);
  background: rgb(203, 223, 243);
}

.ms-button-yellow-dark,
.ms-button-yellow-light:hover{
  color: #FFF;
  background: rgba(240,210,100,1);
}
.ms-button-yellow-dark:hover{
  opacity: 0.9;
}
.ms-button-yellow-light{
  color: rgb(211, 172, 31);
  background: rgb(253, 248, 223);
}

.ms-button-cyan-dark,
.ms-button-cyan-light:hover{
  color: #FFF;
  background: rgba(27,188,194,1);
  background: linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);

}
.ms-button-cyan-dark:hover{
  opacity: 0.9;
}
.ms-button-cyan-light{
  color: rgba(27,188,194,1);
  background: rgb(209, 242, 243);
}

.ms-button-purple-dark,
.ms-button-purple-light:hover{
  color: #FFF;
  background: rgba(203,153,197,1);
}
.ms-button-purple-dark:hover{
  opacity: 0.9;
}
.ms-button-purple-light{
  color: rgb(221, 97, 207);
  background: rgb(248, 220, 245);
}
</style>