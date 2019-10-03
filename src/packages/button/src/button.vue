<template>
  <button
    class="ms-button"
    @click="handleClick"
    :type="nativeType"
    :disabled="buttonDisabled || loading"
    :class="[
      buttonColor ? 'ms-button-' + color : '',
      buttonSize ? 'ms-button-' + buttonSize : '',
      buttonShade,
      buttonShape,
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

  data () {
    return {
      
    }
  },

  props: {
    size: String,
    color: {
      type: String,
      default: 'blue'
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
    loading: Boolean,
    disabled: Boolean
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
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>