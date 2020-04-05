Component({
  properties: {
    icon: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '请输入...'
    },
    clearable: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    textarea: {
      type: Boolean,
      value: true
    },
    maxlength: {
      type: Number,
      value: 100
    },
    placeholderClass: {
      type: String,
      value: ''
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    type: {
      type: String,
      value: 'text'
    },
    value: {
      type: String,
      value: ''
    }
  },
  data: {
    value: ''
  },
  methods: {
    handleClear() {
      this.setData({
        value: ''
      });
    },
    handleInput(e) {
      this.setData({
        value: e.detail.value
      });
      this.triggerEvent('change', e.detail.value);
    },
    handleFocus() {
      this.triggerEvent('focus');
    },
    handleBlur() {
      this.triggerEvent('blur');
    }
  }
});